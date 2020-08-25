import { Component, OnInit } from '@angular/core';
import { RetailerService } from '../retailer.service';

@Component({
  selector: 'app-addproduct',
  templateUrl: './addproduct.component.html',
  styleUrls: ['./addproduct.component.css']
})
export class AddproductComponent implements OnInit {
  name: any;
  retailerId: any;
  data: any;
  event: any;


  constructor(private retailerService: RetailerService) { }

  ngOnInit(): void {
    this.retailerId = sessionStorage.getItem('retailerId');
    this.retailerService.fetchCategory().subscribe(data => {
      this.data = data;
    })
  }

  onFileChange(event){
    this.name = event.target.files[0];
  }

  upload(){
    let formData : FormData = new FormData();
    formData.append('retailerId', this.retailerId);
    formData.append('name', this.name);
    console.log(formData.get('name'));

    this.retailerService.upload(formData).subscribe(data => {
      alert(JSON.stringify(data));
    })
  }

  fetchCategory(){
    // this.retailerService.fetchCategory().subscribe(data => {
    //   this.data = data;
    //   for(let d of this.data){
    //     alert(d);
    //   }
    // })
   

  }



  

}
