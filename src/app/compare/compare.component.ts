import { Router, ActivatedRoute } from '@angular/router';
import { CompareService } from './../compare.service';
import { Compare } from './../compare';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-compare',
  templateUrl: './compare.component.html',
  styleUrls: ['./compare.component.css']
})
export class CompareComponent implements OnInit{

  compare: Compare;

  data:any;
  flag: boolean=false;
  result;
  comp: any;
  id: number[]=[];
  

  constructor(private compareService: CompareService, private router: Router, private route: ActivatedRoute) { 
    this.compare=new Compare();
    //this.id= [4,11];
  }

  ngOnInit(): void {
    /*this.route.params.subscribe(
      params=>{
        this.id=params['compareArr'];
        alert(this.id);
      })*/
      this.comp=JSON.parse(sessionStorage.getItem('compareArr'));
      //alert(this.comp);
      for(let it of this.comp){
        this.id.push(it);
        //alert(it);
      }
      this.compareService.compareProduct(this.id).subscribe(data => {
        this.flag=true;
        this.data=data;
        this.result=this.data.list;
        //alert(JSON.stringify(data));
        console.log(this.data);
        for(let item of this.result){
          //alert(item.name+", "+item.price);
          console.log(item.name+", "+item.price)
        }
      })
      //alert(this.id);
  }

  /*compareProductDetails(){
    this.compareService.compareProduct(this.comp).subscribe(data => {
      this.flag=true;
      this.data=data;
      this.result=this.data.list;
      //alert(JSON.stringify(data));
      console.log(this.data);
      for(let item of this.result){
        //alert(item.name+", "+item.price);
        console.log(item.name+", "+item.price)
      }
      //alert(JSON.stringify(data));
      //console.log(JSON.stringify(this.id));
      //this.compareProduct1=data[0]; 
      //alert(this.compareProduct1);
      //console.log(this.compareProduct1);
      //console.log(data[0]);
      //console.log(this.compareProduct1);
      //this.compareProduct2=data[1];
      //console.log(this.compareProduct2);
      //console.log("data"+data);
    })
  }*/

}
