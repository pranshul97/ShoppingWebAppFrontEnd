import { Router } from '@angular/router';
import { CompareService } from './../compare.service';
import { Compare } from './../compare';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-compare',
  templateUrl: './compare.component.html',
  styleUrls: ['./compare.component.css']
})
export class CompareComponent implements OnInit {

  compare: Compare = new Compare();

  compareProduct1: any;
  compareProduct2: any;
  compareProduct3: any;
  compareProduct4: any;

  constructor(private compareService: CompareService, private router: Router) { }

  ngOnInit(): void {
    this.compare.productId.push(4);
    this.compare.productId.push(11);
  }

  compareProductDetails(){
    this.compareService.compareProduct(this.compare).subscribe(data => {
      this.compareProduct1=data[0];
      alert(this.compareProduct1);
      this.compareProduct2=data[1];
      alert(this.compareProduct2);
    })
  }

}
