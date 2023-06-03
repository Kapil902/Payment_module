import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductComponent } from './product/product.component';
import { SupportComponent } from './support/support.component';
import { SigninComponent } from './signin/signin.component';
import { HttpClientModule } from "@angular/common/http";
import { RouterModule, Routes } from '@angular/router';
import { FormControl, FormsModule , ReactiveFormsModule } from '@angular/forms';
import { SignupComponent } from './signup/signup.component';
import { HomeComponent } from './home/home.component';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { ContactComponent } from './contact/contact.component';
import { Cart1Component } from './cart1/cart1.component';
import { AddressComponent } from './address/address.component';
import { SingleproductComponent } from './singleproduct/singleproduct.component';  
import { AboutusComponent } from './aboutus/aboutus.component';

var routes: Routes = [
  {
    path :'single' ,
    component : SingleproductComponent
  },
  {
    path: 'product',
    component: ProductComponent
  },
  {
    path: 'support' ,
    component :SupportComponent
  },
  {
    path : 'home' ,
    component : HomeComponent 
  },

  {path:'', redirectTo:'signup', pathMatch:'full'},
  {
    path : 'support' ,
    component: SupportComponent
  },
  {
    path : 'signup' ,
    component:SignupComponent
  } ,
  {
    path : 'signin' ,
    component:SigninComponent
  } ,
  {
    path : 'product' ,
    component : SingleproductComponent
  },
  {
    path : 'home' ,
    component : HomeComponent
  },
  {
    path : "contact" ,
    component : ContactComponent
  } ,
  {
    path : "cart" ,
    component : Cart1Component 
  },{
    path:"aboutus",
    component:AboutusComponent
  }

]
@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    SigninComponent,
    SignupComponent , 
    SupportComponent , 
    ContactComponent ,
    HomeComponent,
    SingleproductComponent ,
    Cart1Component
    
  ],
  imports: [BrowserModule, SlickCarouselModule  ,FormsModule , ReactiveFormsModule , RouterModule.forRoot(routes), HttpClientModule  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
