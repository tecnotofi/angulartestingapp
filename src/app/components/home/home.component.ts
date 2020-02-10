import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../../services/movies.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: []
})
export class HomeComponent implements OnInit {

  popularMovies: any;

  constructor(private router: Router, private movieService: MoviesService) {
    movieService.getPopularMovies().subscribe((response: any) => {
      this.popularMovies = response.results;
    });
  }

  ngOnInit() {
  }

}
