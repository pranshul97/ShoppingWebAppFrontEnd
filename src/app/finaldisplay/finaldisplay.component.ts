import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-finaldisplay',
  templateUrl: './finaldisplay.component.html',
  styleUrls: ['./finaldisplay.component.css']
})
export class FinaldisplayComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  redirect(){
    this.router.navigate(['app-homepage'])
  }

}
