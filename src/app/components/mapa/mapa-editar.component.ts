import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-mapa-editar',
  templateUrl: './mapa-editar.component.html',
  styleUrls: ['./mapa-editar.component.css']
})
export class MapaEditarComponent implements OnInit {

  forma: FormGroup;

  constructor(public formBuilder: FormBuilder, public dialogRef: MatDialogRef<MapaEditarComponent>, @Inject(MAT_DIALOG_DATA) public data: any) {
    console.log(data);
    this.forma = formBuilder.group({
      'titulo': data.titulo,
      'descripcion': data.descripcion
    });
  }

  ngOnInit() {
  }

  guardarCambios() {
    this.dialogRef.close(this.forma.value);
  }

  closeDialog(): void {
    this.dialogRef.close();
  }
}
