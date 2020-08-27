import { CartService } from './../cart.service';
import { Component, OnInit } from '@angular/core';

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
  constructor(private cartService: CartService) { }

  ngOnInit(): void {
    this.id=sessionStorage.getItem('userId');
    this.id=Number(this.id);
    this.totalPrice=0;
    this.cartService.cartProduct(this.id).subscribe(data => {
      this.data=data;
      this.result=this.data.list;
      console.log(this.result);
      // this.list=this.result;

      for(let pr of this.result){
       this.map.set(pr.productId, this.quantity);
       this.totalPrice=this.totalPrice+pr.price;
        //alert(it);
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

    






}
