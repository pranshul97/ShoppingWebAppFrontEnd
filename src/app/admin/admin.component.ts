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

  productFlag: boolean=false;
  retailerFlag: boolean=false;
  categoryFlag: boolean=false;

  constructor(private adminService: AdminService) { }

  ngOnInit(): void {
  }

  showProduct(){
    this.productFlag=true;
    this.retailerFlag=false;
    this.categoryFlag=false;
    this.adminService.showProductResultToAdmin().subscribe(data => {
      this.data=data;
      this.productList=this.data.list;
    })
  }

  showRetailers(){
    this.retailerFlag=true;
    this.productFlag=false;
    this.categoryFlag=false;
    this.adminService.showProductResultToAdmin().subscribe(data => {
      this.data=data;
      this.retailerList=this.data.rList;
    })
  }

  showProductCategories(){
    this.categoryFlag=true;
    this.retailerFlag=false;
    this.productFlag=false;
    this.adminService.showProductResultToAdmin().subscribe(data => {
      this.data=data;
      this.categoryList=this.data.cList;
    })
  }

}
