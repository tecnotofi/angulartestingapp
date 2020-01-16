import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators, FormArray } from '@angular/forms';
import { Observable } from 'rxjs';


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
    this.forma = new FormGroup({
      nombreCompleto: new FormGroup({
        nombre: new FormControl('', [Validators.required, Validators.minLength(3)]),
        apellido: new FormControl('', [Validators.required, Validators.minLength(3), this.validateSurName]),
      }),
      email: new FormControl('', [Validators.required, Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$')]),
      pasatiempos: new FormArray([
        new FormControl('', Validators.required)
      ]),
      username: new FormControl('', Validators.required, this.validateIfUsernameExists),
      firstPassword: new FormControl('', Validators.required),
      secondPassword: new FormControl(),
    });

    // this.forma.setValue(this.usuario);
    this.forma.controls.secondPassword.setValidators([Validators.required, this.validatePassword.bind(this.forma)]);

    this.forma.controls.username.valueChanges.subscribe(data => console.log(data))
    this.forma.controls.username.statusChanges.subscribe(data => console.log(data))
  }

  save() {
    console.log(this.forma);
    console.log(this.usuario);
  }

  validateSurName(control: FormControl): { [s: string]: boolean } {

    if (control.value === 'invalid') {
      return {
        noinvalid: true
      };
    }
    return;
  }

  validatePassword(control: FormControl): { [s: string]: boolean} {
    const forma: any = this;
    if (control.value !== forma.controls.firstPassword.value) {
      return {
        noiguales: true
      };
    }
    return;
  }

  validateIfUsernameExists(control: FormControl): Promise<any> | Observable<any>{

    let promesa = new Promise((resolve, reject) => {
      setTimeout(() => {
        if (control.value === 'strider'){
          resolve({existe: true})
        } else {
          resolve(null)
        }
      }, 3000);
    });

    return promesa;
  }

  addPasatiempo() {
    (this.forma.controls.pasatiempos as FormArray).push(new FormControl('', Validators.required));
  }
}
