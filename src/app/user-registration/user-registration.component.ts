import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import{ UserService } from '../user.service';
import { Router } from '@angular/router';
import{ Status } from '../status'



@Component({
  selector: 'app-user-registration',
  templateUrl: './user-registration.component.html',
  styleUrls: ['./user-registration.component.css']
})
export class UserRegistrationComponent {

  user: User =new User();
 //status: any
  message: string
  ls: any;

  constructor(private userService: UserService,private router: Router) { }

 register(){
    this.userService.register(this.user).subscribe(data=>{
    // alert( JSON.stringify(data));
      this.ls=data;
      if(this.ls.status == 'SUCCESS'){
        this.message="Registration Done Successfully!!";
        alert(this.ls.message)
        this.router.navigate(['app-user-login']);
      }
      else{
        alert(this.ls.message)
      }
    })

  }

}
