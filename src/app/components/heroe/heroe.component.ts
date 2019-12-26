import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HeroesServices } from '../../services/heroes.service';

@Component({
    selector: 'app-heroe',
    templateUrl: './heroe.component.html'
})
export class HeroeComponent implements OnInit {

    constructor(private activatedRoute: ActivatedRoute, private heroesSerice: HeroesServices) {
        this.activatedRoute.params.subscribe(params => {
            this.heroe = this.heroesSerice.getHero(params['id']);
        });
    }

    heroe: any = {};

    ngOnInit() {}
}
