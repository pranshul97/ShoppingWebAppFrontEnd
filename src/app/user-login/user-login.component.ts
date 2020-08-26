import { Component, OnInit } from '@angular/core';
import { Login } from '../login/login';
import { UserLoginService } from '../user-login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent  {

  login:Login = new Login();
  message: string;
 

  constructor(private userloginService: UserLoginService, private router: Router) { }

  loginuser(){
    this.userloginService.login(this.login).subscribe(data=>{
         // (JSON.stringify(data));
          
      if(data.status == 'SUCCESS'){
        let userId = data.userId;
        let userName = data.name;

        sessionStorage.setItem('userId', userId.toString());
        sessionStorage.setItem('userName', String(userName));
       // alert(sessionStorage.getItem('userName'));
        this.router.navigate(['app-homepage']);

      }
      else{
        this.message = data.message;
      }

    })
  }
}
