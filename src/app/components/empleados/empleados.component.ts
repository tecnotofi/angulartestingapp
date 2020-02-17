import { Component } from '@angular/core';
import { EmpleadosService } from '../../services/empleados-service.service';
import { Empleado } from '../../models/empleado.model';
import { FormGroup, FormControl, Validators } from '@angular/forms';


declare var $: any;

@Component({
  selector: 'app-empleados',
  templateUrl: './empleados.component.html',
  styles: []
})
export class EmpleadosComponent {

  tituloForm: string;
  formulario: FormGroup;
  empleado = {
    nombre: '',
    apellido: '',
    email: ''
  };
  empleados: any[] = [];
  verForm = false;
  empleadoSeleccionado = 0;

  constructor(private empleadosService: EmpleadosService) {
    this.obtenerEmpleados();

    this.formulario = new FormGroup({
      nombre: new FormControl(),
      apellido: new FormControl(),
      email: new FormControl()
    });

    this.formulario.controls.nombre.setValidators([Validators.required, Validators.minLength(3)]);
    this.formulario.controls.apellido.setValidators([Validators.required, Validators.minLength(3)]);
    this.formulario.controls.email.setValidators([Validators.required, Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$')]);
  }

  obtenerEmpleados() {
    this.empleadosService.getEmpleados().subscribe((result: any) => {
      console.log(result);
      this.empleados = result;
    });
  }

  guardarEmpleado() {
    if (this.formulario.status === 'VALID') {
      if (this.empleadoSeleccionado === 0) {
        this.agregarEmpleado();
      } else {
        this.editarEmpleado();
      }
    }
  }

  abrirAgregarEmpleado() {
    this.tituloForm = 'Agregar empleado';
    this.formulario.controls.nombre.setValue('');
    this.formulario.controls.apellido.setValue('');
    this.formulario.controls.email.setValue('');
    this.formulario.value.nombre = '';
    this.formulario.value.apellido = '';
    this.formulario.value.email = '';
    this.verForm = true;
  }

  agregarEmpleado() {
    console.log(this.empleado);
    console.log(this.formulario);
    console.log(this.formulario.status);
    console.log(this.formulario.value);

    this.empleadosService.agregarEmpleado(new Empleado(this.formulario.value.nombre, this.formulario.value.apellido, this.formulario.value.email))
                          .subscribe(() => {
                            this.cerrarModal();
                            this.obtenerEmpleados();
                          });
  }

  abrirEditarEmpleado(empleado: Empleado) {
    console.log(empleado);

    this.tituloForm = 'Editar empleado';
    this.formulario.controls.nombre.setValue(empleado.nombre);
    this.formulario.controls.apellido.setValue(empleado.apellido);
    this.formulario.controls.email.setValue(empleado.email);
    this.formulario.value.nombre = empleado.nombre;
    this.formulario.value.apellido = empleado.apellido;
    this.formulario.value.email = empleado.email;
    this.verForm = true;
    this.empleadoSeleccionado = empleado.id;
  }

  editarEmpleado() {
    console.log(this.empleado);
    console.log(this.formulario);
    console.log(this.formulario.status);
    console.log(this.formulario.value);

    const empleado = new Empleado(this.formulario.value.nombre, this.formulario.value.apellido, this.formulario.value.email);
    empleado.id = this.empleadoSeleccionado;

    this.empleadosService.actualizarEmpleado(empleado)
                          .subscribe(() => {
                            this.cerrarModal();
                            this.obtenerEmpleados();
                          });
  }

  borrarEmpleado(id: number) {
    console.log(id);
    this.empleadosService.borrarEmpleado(id)
                         .subscribe(() => {
                           this.obtenerEmpleados();
                         });
  }

  cerrarModal() {
    this.verForm = false;
    $('#modalNuevoEmpleado').modal('hide');
  }
}
