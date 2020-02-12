import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-galery',
  templateUrl: './galery.component.html',
  styles: []
})
export class GaleryComponent implements OnInit {

  @Input('movies') movies;
  @Input('title') title;

  constructor(private router: Router) { }

  ngOnInit() { }

  imageClick(movie: any) {
    this.router.navigate(['/movie', movie.id]);
  }
}
