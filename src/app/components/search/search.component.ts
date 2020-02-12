import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../../services/movies.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styles: []
})
export class SearchComponent implements OnInit {

  buscar: string = "";

  constructor(public movieService: MoviesService, public activatedRoute: ActivatedRoute, private router: Router) {
    this.activatedRoute.params.subscribe(params => {
      if(params) {
        this.buscar = params.text;
        this.buscarPelicula();
      }
    });
  }

  ngOnInit() { }

  buscarPelicula() {
    if (this.buscar.length == 0) return;

    this.movieService.getPeliculaByName(this.buscar)
                      .subscribe();
  }
 
  moreInfo(movie: any) {
    this.router.navigate(['/movie', movie.id]);
  }
}
