import { Component, OnInit } from '@angular/core';
import { Login } from "./login";
import { LoginService } from "../login.service";


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  retailerLogin : Login = new Login();
  message: any;

  constructor(private service: LoginService) { }

  ngOnInit(): void {
  }

  loginRetailer(){

    this.service.login(this.retailerLogin).subscribe(
      data => {
        alert(JSON.stringify(this.retailerLogin))
      }
    )
    this.message = "Login successfull"
  }
  
  

}
