import { Component } from '@angular/core';
import { AuthenticationService } from '../authentication.service';
import { Router } from '@angular/router';
import { HomeComponent } from '../home/home.component';
@Component({
  selector: 'app-singleproduct',
  templateUrl: './singleproduct.component.html',
  styleUrls: ['./singleproduct.component.css']
})
export class SingleproductComponent {
  product_id = "" ;
  product :any = [] ;

  constructor (  private auth : AuthenticationService , private router:Router){}

  ngOnInit(){
    console.log("Single Product");
    this.product_id = this.auth.get_Pid() ;
    console.log(this.product_id)
    this.getAll() ;
  }

 p_id = this.auth.get_Pid() ;


addtoCart(id :any){
  // this.router.navigate(['/cart'])
this.auth.addtoCart(id).subscribe(
  (success) =>  {
    console.log("addtocart",success) ;
    let result:any = success ;
    this.product = result ;
    this.router.navigate(['/cart'])

  }, 
  error => {
    console.log("Error",error) ;
  }
)
}

  getAll(){
    console.log (this.p_id)
    this.auth.getproductById(this.product_id)
    .subscribe( success => {
      console.log("single_product", success);
      let result:any = success ;
      this.product = result ;
    }, error => {
      console.log("Error",error) ;
    })
    
    ;
}
}
