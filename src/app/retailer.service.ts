import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Retailer } from "./registration/retailer";

@Injectable({
  providedIn: 'root'
})
export class RetailerService {

  constructor(private http: HttpClient) { }

  addRetailer(retailer: Retailer) { 
  
    var url =  'http://localhost:8080/retailerRegister';
    return this.http.post(url,retailer);
    }
}
