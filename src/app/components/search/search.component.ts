import { Component, OnInit } from '@angular/core';
import { EmpleadosService } from '../../services/empleados-service.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styles: []
})
export class SearchComponent implements OnInit {

  buscar = '';

  constructor(private empleadosService: EmpleadosService) { }

  ngOnInit() {
  }

  buscarEmpleado() {
    if (this.buscar.length === 0) return;

    this.empleadosService.getEmpleadoByText(this.buscar).subscribe();

    console.log(this.empleadosService.empleados);
    console.log(this.buscar);
  }
}
