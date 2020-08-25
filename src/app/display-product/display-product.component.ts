import { Component, OnInit, OnChanges } from '@angular/core';
import { FetchProductByIdService } from '../fetch-product-by-id.service';
import { Product} from './Product';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-display-product',
  templateUrl: './display-product.component.html',
  styleUrls: ['./display-product.component.css']
})
export class DisplayProductComponent implements OnInit {

  productId:any;
  ls:any;
  product: Product=new Product();
  constructor(private service: FetchProductByIdService,private route: ActivatedRoute) {
    //this.productId=sessionStorage.getItem("productIdToBeDisplayed");
    //alert("hey");
   }

   /*ngOnChanges(){
     //alert("Hey from Onchanges");
    //this.productId=sessionStorage.getItem("productIdToBeDisplayed");
   }*/
  ngOnInit(): void {
    this.route.params.subscribe(
      params=>{
        const value= params['productId'];
        this.service.fetchProduct(value).subscribe(data => {
          this.ls=data;
          //alert(this.ls.productId);
          this.product.productId=this.ls.productId;
          this.product.name=this.ls.name;
          this.product.brandName=this.ls.brandName;
          this.product.description=this.ls.description;
          this.product.model=this.ls.model;
          this.product.price=this.ls.price;
          this.product.quantity=this.ls.quantity;
          this.product.categoryName=this.ls.category.categoryName;
        })
      });
    /*this.productId=sessionStorage.getItem("productIdToBeDisplayed");
    this.service.fetchProduct(this.productId).subscribe(data => {
      this.ls=data;
      alert(this.ls.productId);
      this.product.productId=this.ls.productId;
      this.product.name=this.ls.name;
      this.product.brandName=this.ls.brandName;
      this.product.description=this.ls.description;
      this.product.model=this.ls.model;
      this.product.price=this.ls.price;
      this.product.quantity=this.ls.quantity;
      this.product.categoryName=this.ls.category.categoryName;
    })*/
    //alert("Hii from ngonit");
  }
/*
  viewProduct(){
    this.productId=sessionStorage.getItem("productIdToBeDisplayed");
  }
*/


}
