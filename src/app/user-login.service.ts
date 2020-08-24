import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Login } from './login/login';
import { LoginStatus } from './login-status';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserLoginService {

  constructor(private http: HttpClient) { }

  login(login: Login): Observable<LoginStatus> {

    let url="http://localhost:8080/login";
    return this.http.post<LoginStatus>(url,login);

  }

  
}
