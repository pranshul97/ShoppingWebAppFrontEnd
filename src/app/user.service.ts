import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import{ User } from './user'

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

 register(user: User){
    let url="http://localhost:8080/userregister";
    return this.http.post(url,user);
  }
}
