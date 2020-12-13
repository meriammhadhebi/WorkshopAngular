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
    return this.http.put(this.url + c.id , c );
  }
  searchCours(id) {
    return this.http.get(this.url + id);
  }
  deleteCours(id) {
    return this.http.delete(this.url + id);
  }
  addCours(c: Cours) {
    return this.http.post(this.url, c);
  }
  SearchMultiple(list:any[],critiria:string,value:any)
  {
    let listsearch : any[];
    for(let i in list)
    {
      if(list[i][critiria]===value)
      listsearch = [list[i], ...listsearch]
    }
    return listsearch;
  }
}
