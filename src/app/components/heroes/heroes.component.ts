import { Component, OnInit } from '@angular/core';
import { HeroesServices, Heroe } from '../../services/heroes.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html'
})
export class HeroesComponent implements OnInit {

  constructor(private HeroesService: HeroesServices, private router: Router) {}

  heroes: Heroe[] = [];

  ngOnInit() {
    this.heroes = this.HeroesService.getHeroes();
  }

  printHero(index: number) {
    this.router.navigate(['/heroe', index]);
  }
}
