import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '../authentication.service';
@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
  constructor (  private auth : AuthenticationService , private router:Router){}
  direct_to_home(){
    this.router.navigate(['/home'])
  }
  direct_to_aboutus(){
    this.router.navigate(['/aboutus'])
  }
  direct_to_product(){
    this.router.navigate(['/product'])
  }  
  direct_to_support(){
    this.router.navigate(['/support'])
  }

}
