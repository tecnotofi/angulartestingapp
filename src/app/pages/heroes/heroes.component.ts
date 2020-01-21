import { Component, OnInit } from '@angular/core';
import { HeroesService } from '../../services/heroes.service';
import { HeroeModel } from '../../models/heroe.model';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  heroes: HeroeModel[] = [];
  cargando = false;

  constructor(private heroesService: HeroesService) { }

  ngOnInit() {
    this.cargando = true;
    this.heroesService.getHeroes().subscribe(response => {
      this.heroes = response;
      this.cargando = false;
    });
  }

  borrarHeroe(heroe: HeroeModel, index: number) {

    Swal.fire({
      title: 'Esta seguro?',
      text: `Esta seguro que desea borrar a ${heroe.nombre}?`,
      icon: 'question',
      showConfirmButton: true,
      showCancelButton: true
    }).then(response => {
      if (response.value) {
        this.heroes.splice(index, 1);
        this.heroesService.borrarHeroe(heroe.id).subscribe();
      }
    });
  }

}
