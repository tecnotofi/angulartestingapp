import { Component, OnInit } from '@angular/core';
import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styles: []
})
export class SearchComponent {

  artists: any[] = [];
  loading: boolean;

  constructor(private spotify: SpotifyService) { }
  
  searchArtist(text: string) {
    this.loading = true;
    this.spotify.getArtistByName(text)
                .subscribe((result: any) => {
                  this.artists = result;
                  this.loading = false;
                });
  }
}
