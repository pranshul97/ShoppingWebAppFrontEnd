import { Component, OnInit, OnChanges } from '@angular/core';

@Component({
  selector: 'app-display-product',
  templateUrl: './display-product.component.html',
  styleUrls: ['./display-product.component.css']
})
export class DisplayProductComponent implements OnInit {

  productId:any;
  constructor() {
    //this.productId=sessionStorage.getItem("productIdToBeDisplayed");
    //alert("hey");
   }

   /*ngOnChanges(){
     //alert("Hey from Onchanges");
    //this.productId=sessionStorage.getItem("productIdToBeDisplayed");
   }*/
  ngOnInit(): void {
    this.productId=sessionStorage.getItem("productIdToBeDisplayed");
    //alert("Hii from ngonit");
  }
/*
  viewProduct(){
    this.productId=sessionStorage.getItem("productIdToBeDisplayed");
  }
*/
}
