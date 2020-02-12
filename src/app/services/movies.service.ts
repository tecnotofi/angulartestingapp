import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  private apiKey = 'a7e763b85d9a190dc3bec735764b3252';
  private baseUrl = 'https://api.themoviedb.org/3';
  public movies = [];

  constructor(private http: HttpClient) { }

  getBillboard(){
    let since = new Date();
    let upto = new Date();

    upto.setDate(upto.getDate() + 7);

    let sinceString = `${since.getFullYear()}-${this.getDateNumberString(since.getMonth() + 1)}-${this.getDateNumberString(since.getDate())}`;
    let uptoString = `${upto.getFullYear()}-${this.getDateNumberString(upto.getMonth() + 1)}-${this.getDateNumberString(upto.getDate())}`;

    const url = `${this.baseUrl}/discover/movie?primary_release_date.gte=${sinceString}&primary_release_date.lte=${uptoString}&api_key=${this.apiKey}`;

    return this.http.get(url);
  }

  getPopularMovies() {
    const url = `${this.baseUrl}/discover/movie?sort_by=popularity.desc&api_key=${this.apiKey}&languages=es`;
    return this.http.get(url);
  }

  getChildMovies() {
    const url = `${this.baseUrl}/discover/movie?certification_country=US&certification.lte=G&sort_by=popularity.desc&api_key=${this.apiKey}`;
    return this.http.get(url);
  }

  getDateNumberString(num: number, size: number = 2): string {
    let s = num + '';

    while (s.length < size) s = '0' + s;

    return s;
  }

  getPeliculaByName(text: string) {
    const url = `${this.baseUrl}/search/movie?query=${text}&sort_by=popularity.desc&api_key=${this.apiKey}&language=es`;
    return this.http.get(url)
                    .pipe(map((response: any) => {
                      this.movies = response.results;
                      return response;
    }));
  }

  getPeliculaById(id: number) {
    const url = `${this.baseUrl}/movie/${id}?&api_key=${this.apiKey}`;
    return this.http.get(url);
  }
}
