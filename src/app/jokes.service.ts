import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpHeaders } from '@angular/common/http';

const url = 'https://sv443.net/jokeapi/v2';

@Injectable({
  providedIn: 'root'
})
export class JokesService {

  constructor(private http: HttpClient) { }

  getJokes(text) {
    const category = 'Any';
    const format = 'json';
    // const idRange = '0-180';
    const type = 'single';
    const jokeUrl = `${url}/joke/${category}?contains=${text} &format=${format}}&type=${type}`;
    return this.http.get(jokeUrl);
  }

  getAll() {
    return this.http.get(url);
  }

  get(id) {
    return this.http.get(`${url}/${id}`);
  }

  create(data) {
    return this.http.post(url, data);
  }

  update(id, data) {
    return this.http.put(`${url}/${id}`, data);
  }

  delete(id) {
    return this.http.delete(`${url}/${id}`);
  }

  deleteAll() {
    return this.http.delete(url);
  }

  findByTitle(title) {
    return this.http.get(`${url}?title=${title}`);
  }
}
