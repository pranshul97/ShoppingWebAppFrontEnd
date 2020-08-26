import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  id: number;
  constructor() { }

  ngOnInit(): void {
    this.id=sessionStorage.getItem(Number("userId"));
  }



  

}
