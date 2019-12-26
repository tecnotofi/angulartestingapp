import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor(private http: HttpClient) { }

  getQuery(query: string){
    const url = `https://api.spotify.com/v1/${query}`;

    const headers = new HttpHeaders({
      Authorization: 'Bearer BQBJiNxdjltRzPIbZd5yFRzb5YfTssSu2QA70TivzmmEFvJvDHuW2q4jY2QwOj7cSeZ-fNwG831B-FvmRH8'
    });

    return this.http.get(url, {headers});
  }

  getNewReleases() {
    return this.getQuery('browse/new-releases').pipe(map(result => result['albums'].items));
  }

  getArtistByName(name: string) {
    return this.getQuery(`search?q=${name}&type=artist&limit=20`).pipe(map(result => result['artists'].items));
  }
}
