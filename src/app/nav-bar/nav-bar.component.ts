import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DisplayProductComponent } from '../display-product/display-product.component';
import { RetailerService } from '../retailer.service';
import { SearchProductsService } from '../search-products.service';
@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {
  userName: any;
  categoryData: any;
  brandsData: any;
  constructor(private router: Router,private retailerService: RetailerService,private prodService: SearchProductsService) {
   }
  ngOnInit(): void{
    this.retailerService.fetchCategory().subscribe(data =>{
      this.categoryData=data;
      //alert(JSON.stringify(this.categoryData));
    })
    this.prodService.fetchBrands().subscribe(data =>{
      this.brandsData=data;
      //alert(JSON.stringify(this.brandsData));
    })

    if(sessionStorage.getItem("userName")!=null){
      this.userName=sessionStorage.getItem("userName");
      //location.reload();
    }
    else{
      this.userName=null;
    }
  }
  productId: any;
  seeproduct(productId: number){
    this.productId=productId;
    //sessionStorage.setItem("productIdToBeDisplayed",this.productId);
    this.router.navigate(['app-display-product/'+this.productId]);
    
  }

  fetchProduct(categoryName: any){
    this.router.navigate(['app-category/'+categoryName]);
  }

  fetchByBrand(brandName: any){
    this.router.navigate(['app-brand-products/'+brandName]);
  }

  logout(){
    sessionStorage.clear();
     sessionStorage.removeItem('userName');
     sessionStorage.removeItem('userId');
    this.userName=null;
      this.router.navigate(['app-user-login'])
  }
}
