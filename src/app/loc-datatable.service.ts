import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { map } from 'rxjs/operators';

export type EmpD=[{
                name:string, 
                project:string,
                id:number,
                mobile:number,
                email:any 
                  }
                 ]

@Injectable({
  providedIn: 'root'
})
export class LocDatatableService {


  List: Array<EmpD>;

  getEmp()
  {

    return this.http.get("/assets/sample/emp.json").pipe(map(data => data as Array<EmpD>))

  }

  constructor(private http:HttpClient) { }
}
