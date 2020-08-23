import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-compare',
  templateUrl: './compare.component.html',
  styleUrls: ['./compare.component.css']
})
export class CompareComponent implements OnInit {

  productsIds: any;

  constructor() { }

  ngOnInit(): void {
    this.productsIds=sessionStorage.getItem("productsToBeCompared");
  }

}
