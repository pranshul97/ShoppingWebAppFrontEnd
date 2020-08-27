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
  data:any;

  constructor(private service: LoginService, private router: Router) { }

  ngOnInit(): void {
  }

  loginRetailer(){

    this.service.login(this.retailerLogin).subscribe(
      data => {
        // alert(JSON.stringify(data));
        this.data=data;
        if(data.status == 'SUCCESS') {
          let retailerId = data.retailerId;
          let retailerName = data.name;
          sessionStorage.setItem('retailerId', String(retailerId));
          sessionStorage.setItem('retailerName', retailerName);
          this.router.navigate(['app-retailerdashboard']);
        }
        else{
          this.message = data.message;
          alert(this.message);
        }
      }
    )
  }
  
  

}
