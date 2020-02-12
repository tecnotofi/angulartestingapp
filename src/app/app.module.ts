import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HttpClientModule, HttpClientJsonpModule } from '@angular/common/http';


import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { GaleryComponent } from './components/home/galery.component';
import { SearchComponent } from './components/search/search.component';
import { MovieComponent } from './components/movie/movie.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { AppRoutingModule } from './app-routing.module';
import { FillPipe } from './pipes/fill.pipe';
import { PeliculaImagenPipe } from './pipes/pelicula-imagen.pipe';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    GaleryComponent,
    SearchComponent,
    MovieComponent,
    NavbarComponent,
    FillPipe,
    PeliculaImagenPipe
  ],
  imports: [
    BrowserModule,
    RouterModule,
    AppRoutingModule,
    HttpClientModule,
    HttpClientJsonpModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
