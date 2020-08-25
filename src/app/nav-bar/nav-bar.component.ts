import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DisplayProductComponent } from '../display-product/display-product.component';
@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent {

  constructor(private router: Router) { }
  
  productId: any;
  seeproduct(productId: number){
    this.productId=productId;
    //sessionStorage.setItem("productIdToBeDisplayed",this.productId);
    this.router.navigate(['app-display-product/'+this.productId]);
    
  }
}
