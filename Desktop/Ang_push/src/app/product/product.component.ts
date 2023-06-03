import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../authentication.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent {
product :any = [] ;
product_id = "" ;


constructor (  private auth : AuthenticationService , private router:Router){}
set_Pid(id :any) {
  this.product_id = id ;
 }

ngOnInit(){
  console.log(" i am on it");
  this.getproduct() ; 
}
direct_to_single(id :any){
  var product_id = id ;
  this.auth.set_Pid (product_id) ;
  this.router.navigate(['single']) ;
}

getproduct(){
  this.auth.getproduct()
  .subscribe( success => {
    console.log("Product", success);
    let result:any = success ;
    this.product = result ;
  }, error => {
    console.log("Error",error) ;
  });
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


}
