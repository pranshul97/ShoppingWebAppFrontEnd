import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  value: string;
  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  text(){
    //alert(this.value);
    this.router.navigate(['app-display-all-products/'+this.value]);
  }
}
