import { Component, OnInit } from '@angular/core';
import { RetailerService } from '../retailer.service';
import { AddProduct } from "./addproduct";
import { AddproductService } from "../addproduct.service";

@Component({
  selector: 'app-addproduct',
  templateUrl: './addproduct.component.html',
  styleUrls: ['./addproduct.component.css']
})
export class AddproductComponent implements OnInit {
  images: any[]=[];
  retailerId: any;
  data: any;
  event: any;
  message: any;

  addProduct: AddProduct = new AddProduct();
  constructor(private retailerService: RetailerService, private productService: AddproductService ) { }

  ngOnInit(): void {
    this.retailerId = sessionStorage.getItem('retailerId');
    this.retailerService.fetchCategory().subscribe(data => {
      this.data = data;
    })
  }

  onFileChange(event){
    /*for(let img of event.target.files){
      this.images+=img;
    }*/
    this.images = event.target.files;
  }

  upload(){
    // alert(JSON.stringify(this.addProduct))
    let formData : FormData = new FormData();
    formData.append('retailerId', this.retailerId);
    formData.append('brandName', this.addProduct.brandName);
    formData.append('name', this.addProduct.name);
    formData.append('price', this.addProduct.price);
    formData.append('model', this.addProduct.model);
    formData.append('quantity', this.addProduct.quantity);
    formData.append('description', this.addProduct.description);
    formData.append('categoryName', this.addProduct.categoryName);
    for(let item of this.images){
      formData.append('productPic',item);
    }
    
    //formData.append('productPic',this.images)
    //alert(formData);
    //alert(this.images[0]);
    //console.log(formData.get('name'));

    this.retailerService.upload(formData).subscribe(data => {
      alert(JSON.stringify(data));
    })
  }

  fetchCategory(){}

  productAdd(){
    this.productService.addProduct(this.addProduct).subscribe(
      data => {
      this.data = data;
      }
    )
    this.message = "Retailer added product successfully";
    alert(this.message);

  }

}
