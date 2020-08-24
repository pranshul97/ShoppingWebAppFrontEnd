import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Login } from './login/login';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) { }

  login(loginRet : Login) { 
  
    var url =  'http://localhost:8080/retailerLogin';
    return this.http.post(url, loginRet);
    }
}
