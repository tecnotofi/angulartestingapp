import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UsuarioModel } from '../models/usuario.model';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private url = 'https://identitytoolkit.googleapis.com/v1/accounts:';
  private apiKey = 'AIzaSyAhoOdvuPYpBlODlyBBb8ruK2Xpuz5qV6o';

  userToken: string;

  //New user
  //https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=[API_KEY]

  //Login
  //https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=[API_KEY]

  constructor(private http: HttpClient) {
    this.readToken();
  }

  signUp(usuario: UsuarioModel) {
    const authData = {
      ...usuario,
      returnSecureToken: true
    };

    return this.http.post(
      `${this.url}signUp?key=${this.apiKey}`,
      authData
    ).pipe(map(response => {
      this.saveToken(response['idToken'], response['expiresIn']);
      return response;
    }));
  }

  login(usuario: UsuarioModel) {
    const authData = {
      ...usuario,
      returnSecureToken: true
    };

    return this.http.post(
      `${this.url}signInWithPassword?key=${this.apiKey}`,
      authData
    ).pipe(map(response => {
      this.saveToken(response['idToken'], response['expiresIn']);
      return response;
    }));
  }

  logout() {
    localStorage.removeItem('token');
    this.userToken = '';
  }

  private saveToken(idToken: string, expirationSeconds: number) {
    this.userToken = idToken;
    localStorage.setItem('token', idToken);

    let now = new Date();
    now.setSeconds(expirationSeconds);
    localStorage.setItem('tokenExpirationTime', now.getTime().toString());
  }

  private readToken() {
    if (localStorage.getItem('token')) {
      this.userToken = localStorage.getItem('token');
    } else {
      this.userToken = '';
    }
  }

  isAuthenticated(): boolean {
    if (this.userToken.length < 2) {
      return false;
    }

    const expirationTime = Number(localStorage.getItem('tokenExpirationTime'));
    const expirationDate = new Date();
    expirationDate.setTime(expirationTime);

    if (expirationDate > new Date()) {
      return true;
    } else {
      return false;
    }
  }
}
