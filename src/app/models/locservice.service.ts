import { Injectable } from '@angular/core';

import { map } from 'rxjs/operators';
import { Http } from '@angular/http';
import { SidemenuComponent } from '../sidemenu/sidemenu.component';

@Injectable({
  providedIn: 'root'
})


export class LocserviceService {

  
  un:string
  up=123
  constructor(public http: Http) {

     
   }
    
   public sm:SidemenuComponent;

   get uname():string{
    return this.sm.uname;  
  }

  set uname(n:string){
    this.sm.uname=n;
  }

  get upass():any{
   return this.sm.upass;
  }

  set upass(p:any){
    this.sm.upass=p;
  }

}
