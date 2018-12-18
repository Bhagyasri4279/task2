import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Subject ,Observable } from 'rxjs';
import {Http, Headers} from '@angular/http';


export type FormData = { name:string, project:string,id:string,mobile:number,email:any };


const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};


@Injectable({
  providedIn: 'root'
})
export class FormserviceService {

  RegData: Array<FormData>;
  os : Observable<any>;


  private s = new Subject();
  

  getForm(FormData){

    //return this.http.get().pipe(map(data => data as Array<Rform>))
    this.s.next(FormData)
    console.log('formservice',FormData);

  }

  // get form(){
  //   return this.getForm(FormData);  
  // }
  

  constructor(private http:HttpClient) {
    this.os = this.s.asObservable();
 
   }

  



  

}
