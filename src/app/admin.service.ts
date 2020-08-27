import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(private http: HttpClient) { }

  showProductResultToAdmin(){
    let url = 'http://localhost:8080/admin';
    return this.http.get(url);
  }
}
