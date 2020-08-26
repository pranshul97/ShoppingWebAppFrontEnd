import { Component, OnInit } from '@angular/core';
import { RetailerService } from '../retailer.service';
import { RetailerDetails } from "./retailerdetails";


@Component({
  selector: 'app-retailerdetails',
  templateUrl: './retailerdetails.component.html',
  styleUrls: ['./retailerdetails.component.css']
})
export class RetailerdetailsComponent implements OnInit {



  retailerId: any;
  data: any;
  name: string;
  contactNumber: any;
  email: string;

  result: any;

  retailerDetails: RetailerDetails;


  constructor(private retailerService: RetailerService) { 
    this.retailerDetails = new RetailerDetails
  }

  ngOnInit(): void {
    this.retailerId = sessionStorage.getItem('retailerId');
    this.retailerId = Number(this.retailerId);
    this.retailerService.viewRetailerDetail(this.retailerId).subscribe(data => {
      this.data=data;
      this.result = this.data.retailers;
    })
    
  }

  viewRetailerDetail(){
    // this.retailerId = sessionStorage.getItem('retailerId');
    // this.retailerId = Number(this.retailerId);
    // this.retailerService.viewRetailerDetail(this.retailerId).subscribe(data => {
    //   this.data = JSON.stringify(data);
    // })
  }

  

  

}
