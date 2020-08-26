import { CategoryService } from './../category.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {

 //constructor(private route: ActivatedRoute, private service: SearchProductsService, private router: Router) { }
 constructor(private route: ActivatedRoute, private service: CategoryService, private router: Router) { }
  compareArr: number[]=[];
  data: any;
  categoriesSelected: any[]=[];
  brandsSelected: any[]=[];
  price: PriceFilter=new PriceFilter();
  min: number;
  max: number;
  ngOnInit(): void {
    this.min=0;
    this.max=Number.MAX_VALUE;
    this.route.params.subscribe(
      params=>{
        const value= params['value'];
        //alert(value);
        this.service.searchByName(value).subscribe(data=>{
          this.data=data;
          alert(JSON.stringify(data));
          /*if(this.data.status=="SUCCESS"){
            alert("product Found");
          }
          else{
            alert("Product not found");
          }*/
          /*for(let item of this.data.list){
            //alert(item.name+", "+item.description);
          }*/
        })
      }
    )
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

  check(dat: any){
    alert(dat);
  }

  applyPrice(){
    this.min=this.price.minval;
    this.max=this.price.maxval;
  }
}

class PriceFilter{
  minval: number;
  maxval: number;
}