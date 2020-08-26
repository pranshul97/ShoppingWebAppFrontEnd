import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DisplayProductComponent } from '../display-product/display-product.component';
import { RetailerService } from '../retailer.service';
@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {
  categoryData: any;
  constructor(private router: Router,private retailerService: RetailerService) {
   }
  ngOnInit(): void{
    this.retailerService.fetchCategory().subscribe(data =>{
      this.categoryData=data;
      alert(JSON.stringify(this.categoryData));
    })
  }
  productId: any;
  seeproduct(productId: number){
    this.productId=productId;
    //sessionStorage.setItem("productIdToBeDisplayed",this.productId);
    this.router.navigate(['app-display-product/'+this.productId]);
    
  }
}
