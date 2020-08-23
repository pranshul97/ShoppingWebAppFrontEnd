import { Compare } from './compare';
import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CompareService {

  constructor(private http: HttpClient) { }

  compareProduct(compare: Compare){
    let url = 'http://localhost:8080/compare';
    return this.http.post(url, compare);
  }
}
