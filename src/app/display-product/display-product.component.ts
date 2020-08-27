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
  images: any[]=[];
  img: any;
  currentImage: any;
  constructor(private service: FetchProductByIdService,private route: ActivatedRoute) {
   }
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
        this.service.fetchImagesById(value).subscribe(data =>{
          this.img=data;
          if(this.img.status=="SUCCESS"){
            for(let item of this.img.list){
              this.images.push(item);
            }
            this.currentImage="http://localhost:8080/downloads/"+this.images[0];
          }
          else{
            this.currentImage="assets/img/img1.jpg"
          }
        })
      });
  }
  index=0;
  
  prev(){
    if(this.img.status=="SUCCESS"){
      
      this.index=(this.index-1+this.images.length)%(this.images.length);
      this.currentImage="http://localhost:8080/downloads/"+this.images[this.index];
    }
    
  }
  
  next(){
    if(this.img.status=="SUCCESS"){
      this.index=(this.index+1)%(this.images.length);
      this.currentImage="http://localhost:8080/downloads/"+this.images[this.index];
    }
  }
}
