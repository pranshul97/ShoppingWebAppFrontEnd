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
  list: number[] = [];
  constructor(private cartService: CartService) { }

  ngOnInit(): void {
    this.id=sessionStorage.getItem('userId');
    this.id=Number(this.id);
    this.cartService.cartProduct(this.id).subscribe(data => {
      this.data=data;
      this.result=this.data.list;
      console.log(this.result);
      this.list=this.result;

      for(let pr of this.list){
        this.totalPrice=this.totalPrice;
        //alert(it);
      }
    })
  }

    






}
