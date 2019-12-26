import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'app-heroe-card',
    templateUrl: './heroe-card.component.html'
})
export class HeroeCardComponent implements OnInit {

    @Input() heroe: any = {};
    @Input() index: number;

    // @Output() heroeClicked: EventEmitter<number>;

    constructor(private router: Router) {
        // this.heroeClicked = new EventEmitter();
    }

    ngOnInit() {}

    printHero() {
        // this.heroeClicked.emit(this.index);
        this.router.navigate(['/heroe', this.index]);
    }
}
