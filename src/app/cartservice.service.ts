import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Subject ,Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class CartserviceService {

  

  os : Observable<any>;
  private sub = new Subject();
  private cartCount = 0
  private sproducts=[
    {
      'name':'string',
      'cost':'number'
    }
  ];

    cService(): Observable<any> {
      return this.os = this.sub.asObservable();
    }

   addProduct(cn:number){
    console.log('services method');
    this.cartCount = this.cartCount + cn
     this.sub.next(this.cartCount);
     return cn;
   }  

  constructor(private http:HttpClient) {
  
    this.sproducts=[
      {
      'name':'OPPO F1S',
      'cost':'19000' 
     },
     
     {
      'name':'REDMI NOTE 5 PRO',
      'cost':'15000' 
     },
     {
      'name':'HONOR',
      'cost':'12000' 
     },
     {
      'name':'NOKIA',
      'cost':'23000' 
     },

   ]

   }


   allProducts(){

       return this.sproducts;

   }




}
