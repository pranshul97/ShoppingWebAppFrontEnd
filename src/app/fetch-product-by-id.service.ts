import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FetchProductByIdService {

  constructor(private http: HttpClient){}

  fetchProduct(productId: any){
    let url='http://localhost:8080/fetchProduct?productId='+productId;
    return this.http.get(url);
  }
  
}
