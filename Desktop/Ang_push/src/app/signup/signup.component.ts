import { SigninComponent } from '../signin/signin.component';
import { ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators,FormControl } from"@angular/forms"
import { FormsModule } from '@angular/forms';
import { AuthenticationService } from '../authentication.service';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
  myfield = "";

  signupForm = new FormGroup({
    name : new FormControl('',[Validators.required , Validators.minLength(5)]),
    email : new FormControl('',[Validators.required , Validators.email]),
    mobile :new FormControl('',[Validators.required,Validators.pattern("[6-9][0-9]{9}")]),
    password : new FormControl('',[Validators.required, Validators. pattern('(?=. *[a-z])(?=. *[A-Z])(?=. *[0-9])(?=. *[$@$! %*? &])[A-Za-z\d$@$! %*? &].{8,}')])
    });

    constructor(private auth: AuthenticationService , private router:Router) { }

    // SignUp(){
      // this.router.navigate(['/home'])

    // console.log(this.signupForm.value);
    // this.auth.login(this.signupForm.value).subscribe(success => 
      // {
      // console.log("Successfull",success)
      // let result:any = success;
      // localStorage.setItem('id',result.data.id)
      // localStorage.setItem('mytoken',result.data.token)
    // },
  //     error => {console.log("Error",error);
  //     })
  //  }
  signup(){
    this.myfield = "this.signinForm.value";

    this.auth.register(this.signupForm.value).subscribe(success => 
      {console.log("Successfull",success)
      let result:any = success;
      // localStorage.setItem('user_id',result.data.id)
      // localStorage.setItem('token',result.token)
      this.router.navigate(['/signin'])
    },
      error => {console.log("Error",error);
      } 
      )
   }
   SignIn(){
      this.router.navigate(['/signin'])
   }

    };

