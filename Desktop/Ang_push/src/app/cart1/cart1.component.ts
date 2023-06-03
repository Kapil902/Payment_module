import { Component } from '@angular/core';
import { AuthenticationService } from '../authentication.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
@Component({
  selector: 'app-cart1',
  templateUrl: './cart1.component.html',
  styleUrls: ['./cart1.component.css']
})

export class Cart1Component {
  cart : any =[] ;
  constructor(private auth: AuthenticationService ,private http:HttpClient) { }
  
  ngOnInit(){
    console.log("Cart");
    this.getAll() ;
  }
  
  calculateTotalAmount(): number {
    let total = 0;
    for (let c of this.cart) {
      total += c.product.offer_price;
    }
    return total;
  }

  getAll(){
    this.auth.getCart()
    .subscribe( success => {
      console.log("Cart", success);
      let result:any = success ;
      this.cart = result ;
    }, error => {
      console.log("Error",error) ;
    })
    
    ;
}
options = {
  // Client API Key
  "key": "rzp_test_0fWNQa9WQJKDgl", // Enter the Key ID generated from the Dashboard
  "amount":"400" , // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
  "currency": "INR",
  "name": "Opel LED's", //your business name
  "description": "Test Transaction",
  "image": "https://example.com/your_logo",
  "order_id": this.createOrder(), //This is a sample Order ID. Pass the `id` obtained in the response of Step 1
 //  "handler": function (response: { razorpay_payment_id: any; razorpay_order_id: any; razorpay_signature: any; }){
 //      alert(response.razorpay_payment_id);
 //      alert(response.razorpay_order_id);
 //      alert(response.razorpay_signature)
 //  },
  "callback_url":"https://eneqd3r9zrjok.x.pipedream.net/",
  "prefill": { //We recommend using the prefill parameter to auto-fill customer's contact information, especially their phone number
      "name": "Gaurav Kumar", //your customer's name
      "email": "gaurav.kumar@example.com", 
      "contact": "9000090000"  //Provide the customer's phone number for better conversion rates 
  },
  "notes": {
      "address": "Razorpay Corporate Office"
  },
  "theme": {
      "color": "#3399cc"
  }
};
pay(){
 let rzp1 = new this.auth.nativeWindow.Razorpay(this.options);
 rzp1.open();
}


createOrder() {
 // Set up the API endpoint URL
 const apiUrl = 'https://api.razorpay.com/v1/orders';

 // Set up the Razorpay API key
 const apiKey = 'rzp_test_0fWNQa9WQJKDgl';

 // Set the request headers
 const headers = new HttpHeaders({
   'Content-Type': 'application/json',
   'Authorization': `Basic ${btoa(apiKey + ':')}`
 });

 // Set the request body
 const requestBody = {
  //  amount: 200, // Amount in smallest currency unit (e.g., paise in INR, cents in USD)
   currency: 'INR', // Currency code
   name: 'Opel LED\'s', // Your business name
   description: 'Test Transaction',
   image: 'https://example.com/your_logo'
 };

 // Make the API call to create the order
 this.http.post(apiUrl, requestBody, { headers }).subscribe(
   (response: any) => {
     // Handle the response
     console.log(response);

     // You can extract the order ID from the response and use it for further processing
     const orderId = response.id;

     // Perform any additional actions based on the created order
     // For example, you can redirect the user to the payment page
     // window.location.href = response.short_url;
   },
   (error: any) => {
     // Handle the error
     console.error(error);
   }
 );
}

}
