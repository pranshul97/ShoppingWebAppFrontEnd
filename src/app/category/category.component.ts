import { CategoryService } from './../category.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SearchProductsService } from '../search-products.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {

 constructor(private route: ActivatedRoute, private service: SearchProductsService, private router: Router) { }
 compareArr: number[]=[];
 data: any;
 allCategories: any[]=[];
 categories: any[]=[];
 categoriesSelected: any[]=[];
 brandsSelected: any[]=[];
 allBrands:any[]=[];
 brands: any[]=[];
 price: PriceFilter=new PriceFilter();
 min: number;
 max: number;
  ngOnInit(): void {
    alert("Hello");
    this.min=0;
    this.max=Number.MAX_VALUE;
    this.route.params.subscribe(
      params=>{
        const value= params['categoryName'];
        this.min=0;
        this.max=Number.MAX_VALUE;
        this.allCategories=[];
        this.categories=[];
        this.categoriesSelected=[];
        this.brandsSelected=[];
        this.allBrands=[];
        this.brands=[];        
        //alert(value);
        this.service.fetchProductByCategoryName(value).subscribe(data=>{
          this.data=data;
          alert(JSON.stringify(data));
          for(let item of this.data.list){
            if(!this.allCategories.includes(item.categoryName)){
              this.allCategories.push(item.categoryName);
              this.categoriesSelected.push(item.categoryName);
            }
            if(!this.allBrands.includes(item.brandName)){
              this.allBrands.push(item.brandName);
              this.brandsSelected.push(item.brandName);
            }
          }
        })
      }
      
    )
    //this.getCategories(JSON.stringify(this.data));
  }

  addToCompare(id: number){
    alert(id);
    this.compareArr.push(id);
  }

  moveToCompare(){
    //alert("Hey");
    sessionStorage.setItem("compareArr",JSON.stringify(this.compareArr));
    this.router.navigate(['/app-compare']);
  }

  check(event,dat: any){
    if(event.target.checked){
      this.categories.push(dat);
      //alert("hi");
    }
    else{
      for(let i=0;i<this.categories.length;i++){
        if(this.categories[i]==dat){
            this.categories.splice(i,1);
        }
      }
    }
    alert(this.categories);
  }

  check1(event,dat: any){
    if(event.target.checked){
      this.brands.push(dat);
      //alert("hi");
    }
    else{
      for(let i=0;i<this.brands.length;i++){
        if(this.brands[i]==dat){
            this.brands.splice(i,1);
        }
      }
    }
    alert(this.brands);
  }


  applyCategory(){
    if(this.categories.length>0){
      this.categoriesSelected=[];
      for(let item of this.categories){
        this.categoriesSelected.push(item);
      }
      //this.categories=[];
    }
    else{
      this.categoriesSelected=this.allCategories;
    }
  }
  applyPrice(){
    this.min=this.price.minval;
    this.max=this.price.maxval;
  }

  applyBrands(){
    if(this.brands.length>0){
      this.brandsSelected=[];
      for(let item of this.brands){
        this.brandsSelected.push(item);
      }
    }
    else{
      this.brandsSelected=this.allBrands;
    }
  }
}

class PriceFilter{
  minval: number;
  maxval: number;
}