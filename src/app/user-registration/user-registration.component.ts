import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import{ UserService } from '../user.service';

@Component({
  selector: 'app-user-registration',
  templateUrl: './user-registration.component.html',
  styleUrls: ['./user-registration.component.css']
})
export class UserRegistrationComponent {

  user: User =new User();
  message: string

  constructor(private userService: UserService) { }

 register(){
    this.userService.register(this.user).subscribe(data=>{
      //remove alert
      alert(JSON.stringify(data));
    })
    this.message="Registration Done Successfully!! ";
  }

}
