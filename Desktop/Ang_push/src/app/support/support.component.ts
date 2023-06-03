import { Component, OnInit } from '@angular/core';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';
import {FormGroup,FormControl,Validators,FormBuilder} from '@angular/forms';
// import { ContactService } from '../contact.service';
import { AuthenticationService } from '../authentication.service';
import {Router,ActivatedRoute}from '@angular/router';

@Component({
  selector: 'app-support',
  templateUrl: './support.component.html',
  styleUrls: ['./support.component.css']
})
export class SupportComponent implements OnInit {
  supportForm!:FormGroup
  constructor(private  cSer:AuthenticationService,private router:Router,private actRoute:ActivatedRoute) { }
  submitted: false = false;
  ngOnInit():void {
    this.actRoute.queryParams.subscribe(params =>{
      console.log(params);
      this.supportForm.patchValue(params);
    })
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
    
    add(){
      console.log(this.supportForm.value);
      this.cSer.addSupport(this.supportForm.value).subscribe( success =>{
        console.log("Success",success);
      },
      error =>{
        console.log("error",error);
      }
      )      
    }
  }
  // supportForm= new FormControl({
  //   userName:new FormControl('',[Validators.required,Validators.minLength(4)])
  // })
  

