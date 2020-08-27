import { Component, OnInit } from '@angular/core';
import { RetailerService } from "../retailer.service";
import { Retailer } from "./retailer";

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  
  retailer: Retailer = new Retailer();

  message: any;
  data:any;

  constructor(private service: RetailerService) { }

  ngOnInit(): void {
  }

  addRetailer(){
    this.service.addRetailer(this.retailer).subscribe(
      data => {
      //  alert(JSON.stringify(this.retailer));
      this.data = data;
      }
    )
    this.message = "Retailer registered successfully";
    alert( "Retailer registered successfully")
  }

  

}
