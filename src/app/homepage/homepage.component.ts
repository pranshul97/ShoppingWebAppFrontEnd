import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {

  userName: any;
  index: number=0;
  image: any[]=[
    "https://cdn.pixabay.com/photo/2015/10/12/15/18/store-984393_960_720.jpg",
    "https://cdn.pixabay.com/photo/2015/04/20/13/36/objects-731426_960_720.jpg",
    "https://cdn.pixabay.com/photo/2015/11/07/11/46/fashion-1031469_960_720.jpg",
    "https://cdn.pixabay.com/photo/2013/11/14/12/34/neckties-210347_960_720.jpg",
    "https://cdn.pixabay.com/photo/2014/07/27/17/29/ironing-403074_960_720.jpg"
  ];
  currentImage=this.image[0];
  constructor(private router: Router) { }

  ngOnInit(): void {
    this.userName = sessionStorage.getItem('userName');
  }

  /*logout(){
    sessionStorage.clear();
     sessionStorage.removeItem('userName');
     sessionStorage.removeItem('userId');

      this.router.navigate(['app-user-login'])
  }*/

  prev(){
      this.index=(this.index-1+this.image.length)%(this.image.length);
      this.currentImage=this.image[this.index];
    
  }
  
  next(){
    
      this.index=(this.index+1)%(this.image.length);
      this.currentImage=this.image[this.index];
  }

}
