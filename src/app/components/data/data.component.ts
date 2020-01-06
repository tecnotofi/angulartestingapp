import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators, FormArray } from '@angular/forms';


@Component({
  selector: 'app-data',
  templateUrl: './data.component.html',
  styles: []
})
export class DataComponent {

  forma: FormGroup;
  usuario: any = {
    nombreCompleto: {
      nombre: '',
      apellido: ''
    },
    email: '',
    pasatiempos: ['Correr', 'Leer']
  };

  constructor() {
    console.log(this.usuario);
    this.forma = new FormGroup({
      'nombreCompleto': new FormGroup({
        'nombre': new FormControl('', [Validators.required, Validators.minLength(3)]),
        'apellido': new FormControl('', [Validators.required, Validators.minLength(3)]),
      }),
      'email': new FormControl('', [Validators.required, Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$')]),
      'pasatiempos': new FormArray([
        new FormControl('', Validators.required)
      ])
    });

    // this.forma.setValue(this.usuario);
  }

  save() {
    console.log(this.forma);
    console.log(this.usuario);
  }

  addPasatiempo() {
    (<FormArray>this.forma.controls['pasatiempos']).push(new FormControl('Leer', Validators.required));
  }
}
