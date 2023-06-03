import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl , Validators } from '@angular/forms';
import { AuthenticationService } from '../authentication.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent {
  // email :  ;
  myfield = "";

  signinForm = new FormGroup({
    email: new FormControl('',[Validators.required,Validators.email]),
    password: new FormControl()
   }) 
  

  constructor(private auth: AuthenticationService , private router:Router) { }
  login(){
    this.myfield = "this.signinForm.value";

    this.auth.login(this.signinForm.value).subscribe(success => 
      {console.log("Successfull",success)
      let result:any = success;
      console.log(result.id)
      localStorage.setItem('token',result.token)
      console.log(result.id);
      localStorage.setItem('user_id' ,result.id)
      localStorage.setItem('user_name' , result.name)
      this.router.navigate(['/home'])
    },
      error => {console.log("Error",error);
      } 
      )
   }
   redirect_to_signup(){
    this.router.navigate(['/signup'])
   }
};