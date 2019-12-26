import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';

@Component({
    selector: 'app-protected-page',
    templateUrl: './protected-page.component.html',
})
export class ProtectedPageComponent implements OnInit {
    constructor(public auth: AuthService) { }

    ngOnInit(): void { }
}
