import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private http: HttpClient) { }

  searchByName(text: string){
    let url='http://localhost:8080/fetchByName';
    return this.http.post(url,text);
  }
}
