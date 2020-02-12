import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { SearchComponent } from './components/search/search.component';
import { MovieComponent } from './components/movie/movie.component';

const ROUTES: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'search', component: SearchComponent },
    { path: 'search/:text', component: SearchComponent },
    { path: 'movie/:id', component: MovieComponent },
    { path: '**', pathMatch: 'full', redirectTo: 'home' },
];

@NgModule({
    declarations: [],
    imports: [
        RouterModule .forRoot( ROUTES )
    ],
    exports: [
        RouterModule
    ]
})
export class AppRoutingModule { }