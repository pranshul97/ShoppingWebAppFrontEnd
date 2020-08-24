import { Router } from '@angular/router';
import { CompareService } from './../compare.service';
import { Compare } from './../compare';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-compare',
  templateUrl: './compare.component.html',
  styleUrls: ['./compare.component.css']
})
export class CompareComponent implements OnInit {

  compare: Compare = new Compare();

  id: {
    "productsId" : [4, 11]
  }

  compareComponentobj: any;

  constructor(private compareService: CompareService, private router: Router) { }

  ngOnInit(): void {
    this.compareService.compareProduct(this.compare).subscribe(data => {
      this.compareComponentobj=data;
    })
  }

}
