import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UsuarioModel } from '../../models/usuario.model';
import { AuthService } from '../../services/auth.service';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  usuario: UsuarioModel;
  remember = false;

  constructor(private auth: AuthService, private router: Router) { }

  ngOnInit() {
    this.usuario = new UsuarioModel();

    if (localStorage.getItem('email')) {
      this.usuario.email = localStorage.getItem('email');
      this.remember = true;
    }
  }

  onLogin( form: NgForm) {
    if (form.invalid) {
      return;
    }

    Swal.fire({
      icon: 'info',
      text: 'Cargando...',
      allowOutsideClick: false
    });

    Swal.showLoading();

    this.auth.login(this.usuario)
              .subscribe(response => {
                console.log(response);
                Swal.close();
                if (this.remember) {
                  localStorage.setItem('email', this.usuario.email);
                }
                this.router.navigateByUrl('/home');
              }, err => {
                console.log(err.error.error.message);
                Swal.fire({
                  icon: 'error',
                  title: 'Auth error',
                  text: err.error.error.message,
                  allowOutsideClick: true
                });
              });
  }
}
