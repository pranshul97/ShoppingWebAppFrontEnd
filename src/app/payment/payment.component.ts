import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {
  price: string;
  user: string;

  constructor() { 
       
  }

  ngOnInit(): void {
    this.price = sessionStorage.getItem('totalPrice');
    this.user = sessionStorage.getItem('userName');

  }

}
