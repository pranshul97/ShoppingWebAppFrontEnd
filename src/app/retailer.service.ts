import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Retailer} from "./registration/retailer";
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class RetailerService {

  constructor(private http: HttpClient) { }

  addRetailer(retailer: Retailer) { 
  
    var url =  'http://localhost:8080/retailerRegister';
    return this.http.post(url,retailer);
    }

    upload(formData: FormData){
      let url="http://localhost:8080/product-pic-upload";
      return this.http.post(url, formData);
    }

  fetchCategory(){
    var url = 'http://localhost:8080/fetchCategory';
    return this.http.get(url);
  }

  viewRetailerDetail(retailerId: any){
    var url = 'http://localhost:8080/fetchRetailer?retailerId='+retailerId;
    return this.http.get(url);
  }

  
}
