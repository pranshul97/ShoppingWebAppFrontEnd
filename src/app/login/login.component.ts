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
    //alert(JSON.stringify(this.retailerLogin));

    this.service.login(this.retailerLogin).subscribe(
      data => {
        alert(JSON.stringify(this.retailerLogin));
        alert(JSON.stringify(data));
        if(data.status == 'SUCCESS') {
          let retailerId = data.retailerId;
          let retailerName = data.name;
          //let obj = {id : customerId, name : customerName};
          sessionStorage.setItem('retailerId', String(retailerId));
          sessionStorage.setItem('retailerName', retailerName);
          this.router.navigate(['app-retailerdashboard']);
        }
      }
    )
    this.message = "login successful";
  }
  
  

}
