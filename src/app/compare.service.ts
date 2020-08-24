import { Compare } from './compare';
import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CompareService {

  compare: Compare;
  //compares: any[];

  constructor(private http: HttpClient) {
      this.compare=new Compare();
      //this.compares=[];
   }

   /*pushId(id: number){
     var a = this.compares.push(id);
     console.log("hello with id"+a);
   }*/

  compareProduct(id: any){
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');
    headers.append ('Authorization',sessionStorage.getItem('token'));
    console.log("madhav");
    console.log("id="+JSON.stringify(id));
    let url = 'http://localhost:8080/compare';
    return this.http.post(url, id);
    //console.log("id="+id);
  }
}
