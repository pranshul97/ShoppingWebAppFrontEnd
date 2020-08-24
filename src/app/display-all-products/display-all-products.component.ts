import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-display-all-products',
  templateUrl: './display-all-products.component.html',
  styleUrls: ['./display-all-products.component.css']
})
export class DisplayAllProductsComponent implements OnInit {

  constructor(private route: ActivatedRoute) { }

  data: any;
  ngOnInit(): void {
    this.route.params.subscribe(
      params=>{
        const value= params["value"];
        alert(value);
      }
    )
  }

}
