import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmpleadosComponent } from './components/empleados/empleados.component';
import { SearchComponent } from './components/search/search.component';

const ROUTES: Routes = [
    {path: 'home', component: EmpleadosComponent},
    {path: 'search', component: SearchComponent},
    {path: '**', pathMatch: 'full', redirectTo: 'home'}
];

@NgModule({
    declarations: [],
    imports: [
        RouterModule.forRoot(ROUTES)
    ],
    exports: [
        RouterModule
    ]
})
export class AppRoutingModule { }