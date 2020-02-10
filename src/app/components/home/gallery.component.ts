import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styles: []
})
export class GalleryComponent implements OnInit {

  @Input('movies') movies;
  @Input('title') title;

  constructor(private router: Router) { }

  ngOnInit() {
  }

  
}
