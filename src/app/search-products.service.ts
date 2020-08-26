import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SearchProductsService {

  constructor(private http: HttpClient) { }

  searchByName(text: string){
    let url='http://localhost:8080/fetchByName';
    return this.http.post(url,text);
  }

  
  fetchProductByCategoryName(categoryName: any){
    let url='http://localhost:8080/fetchByCategory';
    return this.http.post(url,categoryName);
  }
}
