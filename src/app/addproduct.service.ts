import { Injectable } from '@angular/core';
import { AddProduct } from "./addproduct/addproduct";
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AddproductService {

  constructor(private http: HttpClient) { }

  addProduct(addProduct: AddProduct ) { 
  
    var url =  'http://localhost:8080/addProduct';
    return this.http.post(url,addProduct);
    }
}
