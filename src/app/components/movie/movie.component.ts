import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MoviesService } from '../../services/movies.service';
import { Location } from '@angular/common';


@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styles: []
})
export class MovieComponent implements OnInit {

  pelicula: any;

  constructor(public route: ActivatedRoute, private movieService: MoviesService, private location: Location) {
    this.route.params.subscribe(params => {
      this.movieService.getPeliculaById(params.id)
                        .subscribe((movie: any) => {
                          this.pelicula = movie;
      });
    });
  }

  ngOnInit() {
  }

  back(){
    this.location.back();
  }
}
