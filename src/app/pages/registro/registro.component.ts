import { Component, OnInit } from '@angular/core';
import { UsuarioModel } from '../../models/usuario.model';
import { NgForm } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {

  usuario: UsuarioModel;
  remember = false;

  constructor(private auth: AuthService, private router: Router) { }

  ngOnInit() {
    this.usuario = new UsuarioModel();
  }

  onSubmit(form: NgForm) {
    if (form.invalid) {
      return;
    }

    Swal.fire({
      icon: 'info',
      text: 'Cargando...',
      allowOutsideClick: false
    });

    Swal.showLoading();

    this.auth.signUp(this.usuario)
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
                  title: 'Signup error',
                  text: err.error.error.message,
                  allowOutsideClick: true
                });
              });
  }
}
