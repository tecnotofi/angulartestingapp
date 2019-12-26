import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HeroesServices } from '../../services/heroes.service';

@Component({
    selector: 'app-search',
    templateUrl: './search.component.html'
})
export class SearchComponent implements OnInit {
    constructor(private activatedRoute: ActivatedRoute, private heroesService: HeroesServices) {}

    heroes: any[] = [];
    text: string;

    ngOnInit() {
        this.activatedRoute.params.subscribe(params => {
            this.text = params['text'];
            this.heroes = this.heroesService.getHeroByName(params['text']);
        });
    }
}