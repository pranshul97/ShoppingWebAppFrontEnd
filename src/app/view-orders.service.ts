import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ViewOrdersService {

  constructor(private http:HttpClient) { }

  viewOrderDetails(userId: any){
    var url= 'http://localhost:8080/viewOrders?user_Id='+userId;
    return this.http.get(url);
  }
}
