import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Cours } from '../model/cours';

@Injectable({
  providedIn: 'root'
})
export class CoursService {

  url = 'http://localhost:3000/cours/';

  constructor(private http: HttpClient) { }

  getCours() {
    return this.http.get<Cours[]>(this.url);
  }
  putCours(c: Cours) {
    return this.http.put(this.url, c);
  }
  searchCours(id) {
    return this.http.get(this.url + id);
  }
  deleteCours(id) {
    return this.http.delete(this.url + id);
  }
}
