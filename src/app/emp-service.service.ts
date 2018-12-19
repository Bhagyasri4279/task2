import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';

import { Observable, of, Subject} from 'rxjs';
import { map, catchError } from 'rxjs/operators';


export type Emp = { name:string, project:string,id:number,mobile:number,email:any };

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class EmpServiceService {

  empList: Array<Emp>;

  getEmp()
  {

    return this.http.get("/assets/sample/emp.json").pipe(map(data => data as Array<Emp>))

  }

  // getStudents(){
  //   return this.http.get('http://172.17.15.68:3000/');
        
  // }


  // getStudentId(){
 
        
  // }

  // poststudent(){
    
  // }

  // putStudent(){

  // }

  // delStudent(){

  // }

  constructor(private http:HttpClient) { }
}
