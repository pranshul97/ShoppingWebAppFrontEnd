import { CartService } from './../cart.service';
import { Component, OnInit } from '@angular/core';
import { FetchProductByIdService } from '../fetch-product-by-id.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  totalPrice: number;
  id: any;
  data: any;
  result;
  // list: number[] = [];
  map= new Map();
  quantity: number=1;
  images=new Map();
  img: any;
  constructor(private cartService: CartService, private service: FetchProductByIdService) { }

  ngOnInit(): void {
    this.id=sessionStorage.getItem('userId');
    this.id=Number(this.id);
    this.totalPrice=0;
    this.cartService.cartProduct(this.id).subscribe(data => {
      this.data=data;
      this.result=this.data.list;
      //console.log(this.result);
      // this.list=this.result;

      for(let pr of this.result){
       this.map.set(pr.productId, this.quantity);
       this.totalPrice=this.totalPrice+pr.price;
        //alert(it);
        this.service.fetchImagesById(pr.productId).subscribe(data =>{
          this.img=data;
          if(this.img.status=="SUCCESS"){
            for(let item of this.img.list){
              this.images.set(pr.productId,"http://localhost:8080/downloads/"+item);
              break;
            }
          }
          else{
            this.images.set(pr.productId,"assets/img/img1.jpg");
          }
        })
      }
    })
  }

  decreaseQuantity(id: any,price: any){
    if(this.map.get(id)>1){
      this.map.set(id, this.map.get(id)-1);
      this.totalPrice=this.totalPrice-Number(price);
    }
  }

  increaseQuantity(id: any,price: any){
    this.map.set(id, this.map.get(id)+1);
    this.totalPrice=this.totalPrice+Number(price);
  }

  placeOrder(){
    sessionStorage.setItem('totalPrice', this.totalPrice.toString());
  }

    






}
