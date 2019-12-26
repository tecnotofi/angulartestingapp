import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  name = 'Tecno';
  secondName = 'sAnTiAgO TOPham gIl';

  array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  pi = Math.PI;

  number = 0.234;

  salary = 1234.5;

  json = {
    name: 'Bruce Wayne',
    code: 'Batman',
    age: 35,
    address: {
      street: 'Street 20',
      door: 4
    }
  };

  promiseValue = new Promise((resolve, reject) => {
    setTimeout(() => resolve('Arrived!'), 3500);
  });

  video = 'hHW1oY26kxQ';

  date = new Date();

  passwordText = 'contraseña';

  showPassword = true;
}
