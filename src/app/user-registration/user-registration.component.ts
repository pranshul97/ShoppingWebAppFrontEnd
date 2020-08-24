import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import{ UserService } from '../user.service';
import{ Status } from './status';


@Component({
  selector: 'app-user-registration',
  templateUrl: './user-registration.component.html',
  styleUrls: ['./user-registration.component.css']
})
export class UserRegistrationComponent {

  user: User =new User();
 status: any
  message: string

  constructor(private userService: UserService) { }

 register(){
    this.userService.register(this.user).subscribe(data=>{
      JSON.stringify(data);

     // if(data.status == 'SUCCESS'){
        this.message="Registration Done Successfully!!";
     // }
    })
  //  this.message="Registration Done Successfully!! ";
  }

}
