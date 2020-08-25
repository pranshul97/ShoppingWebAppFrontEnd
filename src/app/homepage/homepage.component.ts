import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {

  userName: any;

  constructor(private router: Router) { }

  ngOnInit(): void {
    this.userName = sessionStorage.getItem('userName');
  }

  logout(){
    sessionStorage.clear();
     sessionStorage.removeItem('userName');
     sessionStorage.removeItem('userId');

      this.router.navigate(['app-user-login'])
  }

}
