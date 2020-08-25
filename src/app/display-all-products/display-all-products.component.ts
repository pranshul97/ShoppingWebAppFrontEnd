import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SearchProductsService} from '../search-products.service';
@Component({
  selector: 'app-display-all-products',
  templateUrl: './display-all-products.component.html',
  styleUrls: ['./display-all-products.component.css']
})
export class DisplayAllProductsComponent implements OnInit {

  constructor(private route: ActivatedRoute, private service: SearchProductsService, private router: Router) { }
  compareArr: number[]=[];
  data: any;
  categoriesSelected: any[]=[];
  brandsSelected: any[]=[];
  ngOnInit(): void {
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

}
