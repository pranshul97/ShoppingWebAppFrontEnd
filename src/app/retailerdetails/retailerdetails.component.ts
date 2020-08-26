import { Component, OnInit } from '@angular/core';
import { RetailerService } from '../retailer.service';


@Component({
  selector: 'app-retailerdetails',
  templateUrl: './retailerdetails.component.html',
  styleUrls: ['./retailerdetails.component.css']
})
export class RetailerdetailsComponent implements OnInit {
  retailerId: any;
  data: any;

  constructor(private retailerService: RetailerService) { }

  ngOnInit(): void {
    this.retailerId = sessionStorage.getItem('retailerId');
    this.retailerId = Number(this.retailerId);
    this.retailerService.viewRetailerDetail(this.retailerId).subscribe(data => {
      this.data = data;
      alert(JSON.stringify(data));
    })
  }

  viewRetailerDetail(){
    // this.retailerId = sessionStorage.getItem('retailerId');
    // this.retailerId = Number(this.retailerId);
    // this.retailerService.viewRetailerDetail(this.retailerId).subscribe(data => {
    //   this.data = data;
    //   alert(JSON.stringify(data));
    // })

  }

}
