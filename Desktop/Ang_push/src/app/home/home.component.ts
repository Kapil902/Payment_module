import { Router } from '@angular/router';
import { Component } from '@angular/core';
import { AuthenticationService } from '../authentication.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  deal_of_day:any =[] ;
  slider :any = [] ;
  product_id = "" ;
  images = [  
    
    { img: "../assets/images/1.jpg" },  
    { img: "../assets/images/2.jpg" },  
    { img: "../assets/images/3.jpg" },  
    { img: "../assets/images/4.jpg" },  
  
  ];  
  
  slideConfig = {  
    "slidesToShow": 1,  
    "slidesToScroll": 1,  
    "dots": true,  
    "infinite": true  
  };  
  slideConfig1 = {  
    "slidesToShow": 3,  
    "slidesToScroll": 3,  
    "dots": true,  
    "infinite": true  
  };  
constructor (  private auth : AuthenticationService , private router:Router){}
 set_Pid(id :any) {
  this.product_id = id ;
 }




  ngOnInit(){
    console.log(" i am on it");
    this.getAll() ;
    this.getSlider() ;
    this.direct_to_single;
    
  }

direct_to_login()
{
  this.router.navigate(['/signin'])
 }
direct_to_product(){
  this.router.navigate(['/product'])
}
direct_to_contact(){
  this.router.navigate(['/contact'])
}
direct_to_home(){
  this.router.navigate(['/home'])
}
direct_to_support(){
  this.router.navigate(['/support'])
}
direct_to_aboutus(){
  this.router.navigate(['/aboutus'])
}
direct_to_single(id : any){
  var product_id = id ;
  this.auth.set_Pid (product_id) ;
  this.router.navigate(['single']) ;

}



   getAll(){
    this.auth.getproduct()
    .subscribe( success => {
      console.log("deal_of_day", success);
      let result:any = success ;
      this.deal_of_day = result ;
    }, error => {
      console.log("Error",error) ;
    });
}


getSlider(){
  this.auth.getSlider()
  .subscribe( success => {
    console.log("Slider", success);
    let result:any = success ;
    this.slider = result ;
  }, error => {
    console.log("Error",error) ;
  });
}
}
