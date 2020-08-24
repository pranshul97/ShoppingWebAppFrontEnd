import { Compare } from './../compare';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-compare',
  templateUrl: './compare.component.html',
  styleUrls: ['./compare.component.css']
})
export class CompareComponent implements OnInit {

  compare: Compare = new Compare();

  constructor() { }

  ngOnInit(): void {
    this.compare.productId=sessionStorage.getItem(this.compare);
  }

}
