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
  childMovies: any;
  billboard: any;

  constructor(private router: Router, private movieService: MoviesService) {

    movieService.getBillboard().subscribe((response: any) => {
      this.billboard = response.results;
    });

    movieService.getPopularMovies().subscribe((response: any) => {
      this.popularMovies = response.results;
    });

    movieService.getChildMovies().subscribe((response: any) => {
      this.childMovies = response.results;
    });
  }

  ngOnInit() {
  }

}
