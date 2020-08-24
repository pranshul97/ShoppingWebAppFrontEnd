import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SearchProductsService} from '../search-products.service';
@Component({
  selector: 'app-display-all-products',
  templateUrl: './display-all-products.component.html',
  styleUrls: ['./display-all-products.component.css']
})
export class DisplayAllProductsComponent implements OnInit {

  constructor(private route: ActivatedRoute, private service: SearchProductsService) { }

  data: any;
  ngOnInit(): void {
    this.route.params.subscribe(
      params=>{
        const value= params['value'];
        alert(value);
        this.service.searchByName(value).subscribe(data=>{
          alert(JSON.stringify(data));
        })
      }
    )
  }

}
