import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {Observable} from 'rxjs';
import { Http, Response } from "@angular/http";
import { map, catchError, tap,startWith } from 'rxjs/operators';
import { EmpServiceService } from '../emp-service.service'
import {MatInputModule, MatTableModule, MatToolbarModule } from '@angular/material';
import {MyModuleModule } from '../my-module/my-module.module'
import {MatTableDataSource} from '@angular/material';
import { DataSource } from '@angular/cdk/collections';
import { FormControl,  FormGroup , FormBuilder,Validators} from '@angular/forms';

import { FormserviceService } from '../formservice.service';


//export type Emp = { name:string, project:string,id:number,mobile:number,email:any };



export interface Emp {
  name: string;
  project: string;
  id: any;
  mobile: any;
  email: any;
}



empSearch : new FormControl('');
//filteredOptions:  Observable<string[]>;


//this.empSearch = new FormControl('', Validators.required);

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  empList: Array<Emp>;
   EmpName:string[];

   
   FormData={'name':'','id':'','mobile':'','email':'','project':''}
   FData={'name':'','id':'','mobile':'','email':'','project':''}
  
   displayedColumns: string[] = ['name', 'id','email', 'mobile', 'project'];
  
    eData=[];
  
    dataSource=[];
  constructor(private router: Router,private http: Http,public service: EmpServiceService,private fs:FormserviceService) { 

     

    
  }

  backPage () {
    this.router.navigateByUrl('/');
 }
 
  ngOnInit() {
    

      this.fdata();
 
    this.service.getEmp().subscribe(data => {
      this.empList = data;
      
    // console.log(this.dataSource)

      this.EmpName = this.empList.map(function(item) {
       return item.name;
     });
     this.fun2();
   // console.log(this.EmpName);
 
    this.filteredOptions = this.FormList.valueChanges.pipe(
      startWith(''),
      map(value => this._filter(value))
    );
 

   // this.func();
  
    })    

    
  }


  // get form(){
  //   return this.fs.form;  
  //   console.log(this.form)
  //   this.fdata();
  // }

   fdata(){
    
     //  console.log(this.RegData) 
    //this.empList.push(this.RegData);
    this.fs.os.subscribe(FormData=>{
      this.FData=FormData;
      console.log(this.FData)
      this.empList.push(this.FData);     
      let x=this.empList.length;
     console.log('sdafgj,',this.empList);
     this.EmpName.push(this.empList[x-1].name)
     console.log(this.EmpName)
  //   this.dfun(name);
    })
   
   }


  //  func(){
  //  //  this.dataSource=this.empList;
  // // this.fdata()
  //      console.log( this.empList);     
  //      this.dfun(name);
          
  //  }


dfun(name){
  
 // console.log('1111111111111',this.empList);
  // this.fdata()
 console.log(this.empList);
//  let l=this.empList.length;
//  console.log('before for',this.empList[l-1])
this.fun2()
  let i;
  for(i  in this.empList){
     // console.log(this.empList[l-1])
  //console.log(this.empSearch)
  //console.log(JSON.stringify(this.empList[i]));

   if(name===this.empList[i].name){

       console.log(JSON.stringify(this.empList[i]));

       this.eData.push(this.empList[i]);
       console.log(this.eData);
    this.dataSource=this.eData;
      

    }

    //this.dataSource=this.eData;
      
 }

}
      

   fun2(){
     
     console.log(this.EmpName)
   }

   FormList=new FormControl();
   //EmpName:string[];
  // EmpName:string[]=['aaaaa','bbbb','ccc','cdg'];
   filteredOptions: Observable<string[]>;

   

   private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.EmpName.filter(option => option.toLowerCase().includes(filterValue));
  }


  

  openForm(){

    this.router.navigateByUrl('/register');
    
  }





  
 
}

