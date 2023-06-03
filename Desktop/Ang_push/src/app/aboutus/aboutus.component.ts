import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '../authentication.service';
@Component({
  selector: 'app-aboutus',
  templateUrl: './aboutus.component.html',
  styleUrls: ['./aboutus.component.css']
})
export class AboutusComponent {

  constructor (  private auth : AuthenticationService , private router:Router){}
  
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

}
