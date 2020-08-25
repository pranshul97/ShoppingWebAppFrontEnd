import { Component, OnInit } from '@angular/core';
import { Login } from "./login";
import { LoginService } from "../login.service";
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  retailerLogin : Login = new Login();
  message: any;

  constructor(private service: LoginService, private router: Router) { }

  ngOnInit(): void {
  }

  loginRetailer(){

    this.service.login(this.retailerLogin).subscribe(
      data => {
        alert(JSON.stringify(this.retailerLogin))
      }
    )
    this.message = "login successful";
  }
  
  

}
