import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

const url = 'https://sv443.net/jokeapi/v2';

@Injectable({
  providedIn: 'root'
})
export class JokesService {

  constructor(private http: HttpClient) { }

  getJoke(text) {
    const category = 'Any';
    const format = 'json';
    const type = 'single';
    const jokeUrl = `${url}/joke/${category}?contains=${text}&format=${format}}&idRange=0-185&type=${type}`;
    return this.http.get(jokeUrl);
  }

  getRandomJoke() {
    const category = 'Any';
    const format = 'json';
    const type = 'single';
    const jokeUrl = `${url}/joke/${category}?&format=${format}}&type=${type}`;
    return this.http.get(jokeUrl);
  }
}
