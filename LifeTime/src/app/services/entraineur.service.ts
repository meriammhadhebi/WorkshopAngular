import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { entraineur } from '../model/entraineur';

@Injectable({
  providedIn: 'root'
})
export class EntraineurService {

 
  url = 'http://localhost:3000/entraineur/';

  constructor(private http: HttpClient) { }

  getentraineur() {
    return this.http.get<entraineur[]>(this.url);
  }
  putentraineur(e: entraineur) {
    return this.http.put(this.url + e.id , e );
  }
  searchentraineur(id) {
    return this.http.get(this.url + id);
  }
  deleteentraineur(id) {
    return this.http.delete(this.url + id);
  }
  addentraineur(e: entraineur) {
    return this.http.post(this.url, e);
  }
}
