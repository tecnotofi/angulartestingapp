import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-clases',
  templateUrl: './clases.component.html',
  styles: []
})
export class ClasesComponent implements OnInit {

  alert = 'alert alert-danger';
  ngClassConditions = {
    danger: true
  };
  saving = false;
  savingText = 'Guardar';

  constructor() { }

  ngOnInit() {
  }

  execute() {
    this.saving = true;
    this.savingText = 'Guardando';
    setTimeout(() => {
      this.saving = false;
      this.savingText = 'Guardar';
    }, 3000);
  }
}
