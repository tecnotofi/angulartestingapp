import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { MapaComponent } from './components/mapa/mapa.component';
import { MapaEditarComponent } from './components/mapa/mapa-editar.component';

import { MaterialModule } from './material.module';
import { AgmCoreModule } from '@agm/core';


@NgModule({
  entryComponents: [MapaEditarComponent],
  declarations: [
    AppComponent,
    MapaComponent,
    MapaEditarComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    ReactiveFormsModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyDL6CZRwpS3m9bO_YNbp1uuMKjtcsvXdZs'
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }