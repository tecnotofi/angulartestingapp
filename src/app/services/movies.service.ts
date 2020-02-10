import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  private apiKey = 'a7e763b85d9a190dc3bec735764b3252';
  private baseUrl = 'https://api.themoviedb.org/3';
  public movies = [];

  constructor(private http: HttpClient) { }

  getPopularMovies() {
    const url = `${this.baseUrl}/discover/movie?sort_by=popularity.desc&api_key=${this.apiKey}&languages=es`;
    return this.http.jsonp(url, 'callback');
  }
}
