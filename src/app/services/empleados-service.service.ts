import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Empleado } from '../models/empleado.model';

@Injectable({
  providedIn: 'root'
})
export class EmpleadosService {

  baseUrl = 'http://localhost:3000/employees';
  empleados: Empleado[] = [];

  constructor(private http: HttpClient) { }

  getEmpleados() {
    return this.http.get(this.baseUrl);
  }

  getEmpleadoById(id: number) {
    const url = `${this.baseUrl}/${id}`;
    return this.http.get(url);
  }

  agregarEmpleado(nuevoEmpleado: Empleado) {
    return this.http.post(this.baseUrl, nuevoEmpleado);
  }

  actualizarEmpleado(empleado: Empleado) {
    const url = `${this.baseUrl}/${empleado.id}`;
    return this.http.put(url, empleado);
  }

  borrarEmpleado(id: number) {
    const url = `${this.baseUrl}/${id}`;
    return this.http.delete(url);
  }
}
