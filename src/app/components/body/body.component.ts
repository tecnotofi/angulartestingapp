import { Component } from '@angular/core';

@Component({
    selector: 'app-body',
    templateUrl: './body.component.html'
})
export class BodyComponent {

    show = true;

    text: any = {
        message: 'Dolore exercitation qui anim ut dolore. Incididunt ea sunt commodo do velit exercitation veniam aliqua non excepteur reprehenderit elit proident. Aute nostrud labore consectetur sunt ex.',
        author: 'Fredy Corwin',
    };

    people: string[] = [
                        'Mr. Vanessa Spencer',
                        'Alexander Ernser',
                        'Letha Ryan II',
                        'Penelope Swift',
                        'Kaylee Mertz'
                        ];
}
