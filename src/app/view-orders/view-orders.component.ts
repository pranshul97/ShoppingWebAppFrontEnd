import { Component, OnInit } from '@angular/core';
import { OrderDetails } from './order-details'
import { ViewOrdersService } from '../view-orders.service'

@Component({
  selector: 'app-view-orders',
  templateUrl: './view-orders.component.html',
  styleUrls: ['./view-orders.component.css']
})
export class ViewOrdersComponent implements OnInit {

  userId:any;
  data:any;
  orderDate: any;
  quantity: number;

  result: any;

  orderDetails: OrderDetails

  constructor(private viewOrdersService: ViewOrdersService) { 
    this.orderDetails = new OrderDetails;
  }

  ngOnInit(): void {
    this.userId = sessionStorage.getItem('userId');

    this.viewOrdersService.viewOrderDetails(this.userId).subscribe(data=> {
        this.data=data;
        this.result=this.data.Id;

      })
  }

}
