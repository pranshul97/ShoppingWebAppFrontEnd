import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor(private http: HttpClient) { }

  cartProduct(id: number){
    let url = 'http://localhost:8080/cart';
    return this.http.post(url, id);
  }
}
