import { Component, OnInit } from '@angular/core';
import { RetailerService } from '../retailer.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-retailerdashboard',
  templateUrl: './retailerdashboard.component.html',
  styleUrls: ['./retailerdashboard.component.css']
})
export class RetailerdashboardComponent implements OnInit {
  retailerId: any;
  retailerName: any;
  data: any;
  constructor(private router: Router) { }

  ngOnInit(): void {
    // this.retailerName = sessionStorage.getItem('userName');
  }

  logout(){
    sessionStorage.clear();
     sessionStorage.removeItem('retailerName');
     sessionStorage.removeItem('retailerId');

      this.router.navigate(['app-homepage'])
  }

}
