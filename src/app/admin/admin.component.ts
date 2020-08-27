import { AdminService } from './../admin.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  data: any;
  productList;
  retailerList;
  categoryList;

  constructor(private adminService: AdminService) { }

  ngOnInit(): void {
  }

  showProduct(){
    this.adminService.showProductResultToAdmin().subscribe(data => {
      this.data=data;
      this.productList=this.data.list;
    })
  }

  showRetailers(){
    this.adminService.showProductResultToAdmin().subscribe(data => {
      this.data=data;
      this.retailerList=this.data.rList;
    })
  }

  showProductCategories(){
    this.adminService.showProductResultToAdmin().subscribe(data => {
      this.data=data;
      this.categoryList=this.data.cList;
    })
  }

}
