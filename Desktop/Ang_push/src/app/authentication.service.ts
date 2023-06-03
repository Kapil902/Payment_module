import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
function _window() : any {
  // return the global native browser window object
  return window;
}
@Injectable({
  providedIn: 'root'
})
@Injectable()
export class AuthenticationService {
   public product_id : string = '' ;
   set_Pid(id : any ){
    localStorage.setItem('product_id',id) ;
    console.log(this.product_id) ;
   };
   get nativeWindow() : any {
    return _window();
 }

   
   get_Pid() {
    return this.product_id ;
   }
  constructor(private http : HttpClient){}


  login(data:any){
    localStorage.setItem('user_email' , data.email)
    return this.http.get('http://localhost:8080/user/email/' + localStorage.getItem('user_email') );
  }

  register(data:any){
    return this.http.post('http://localhost:8080/user/add',data)
  }

  getdeal_of_day(){
    const headers = new HttpHeaders()
    .set('content-type','application/json')
    .set('Authorization','Bearer ' + localStorage .getItem ('token'))
    return this.http.get('http://localhost:8080/deal_of_day/getAll',{
      headers:headers
    });
  }

  getproduct(){
    const headers = new HttpHeaders()
    .set('content-type','application/json')
    .set('Authorization','Bearer ' + localStorage .getItem ('token'))
    return this.http.get('http://localhost:8080/product/getAll',{
      headers:headers
    });
  }

  getproductById(product_id : any ){
    const headers = new HttpHeaders()
    .set('content-type','application/json')
    .set('Authorization','Bearer ' + localStorage .getItem ('token')) 
    return this.http.get('http://localhost:8080/product/getby/' + localStorage.getItem('product_id') ,{
      headers:headers
    });
  }

  getCart(){
    const headers = new HttpHeaders()
    .set('content-type','application/json')
    .set('Authorization','Bearer ' + localStorage .getItem ('token')) 
    return this.http.get('http://localhost:8080/cart/getby/' + localStorage.getItem('user_id') ,{
      headers:headers
    });
  }

  addtoCart(product_id : any ){
    // const headers = new HttpHeaders()
    // .set('content-type','application/json')
    // .set('Authorization','Bearer ' + localStorage .getItem ('token')) 
    return this.http.post('http://localhost:8080/cart/add/' +localStorage.getItem('user_id') + ('/') + localStorage.getItem('product_id') ,{
      // headers:headers
    });
  }

  getSlider(){
    const headers = new HttpHeaders()
    .set('content-type','application/json')
    .set('Authorization','Bearer ' + localStorage .getItem ('token'))
    return this.http.get('http://localhost:8080/slider/getAll',{
      headers:headers
    });
  }
  addSupport(data:any){
    const head = new HttpHeaders()
    .set('content-type','application/json')
    .set('x-access-token','' +localStorage.getItem('mytoken'));
    return this.http.post('http://localhost:8080/support/add',data,{headers:head});
  }




}
