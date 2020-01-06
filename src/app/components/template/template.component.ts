import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-template',
  templateUrl: './template.component.html',
  styles: [`
    .ng-invalid.ng-touched:not(form) {
      border: 1px solid red;
    }
  `]
})
export class TemplateComponent {

  usuario: object = {
    nombre: null,
    apellido: null,
    email: null,
    pais: '',
    animal: 'Perro',
    acepta: false
  };

  paises = [
    {
      code: 'UY',
      name: 'Uruguay'
    },
    {
      code: 'ES',
      name: 'España'
    }
  ];

  animales = ['Perro', 'Gato', 'Otro'];

  constructor() { }

  save(forma: NgForm) {
    console.log('Posted');
    console.log('ngForm', forma);
    console.log('valor', forma.value);
  }
}
