import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Login } from './login/login';
import { Observable } from 'rxjs';
import { LoginRetailerStatus } from './login-retailer-status';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) { }

  login(loginRet : Login) : Observable<LoginRetailerStatus>{ 
  
    var url =  'http://localhost:8080/retailerLogin';
    return this.http.post<LoginRetailerStatus>(url, loginRet);
    }
}
