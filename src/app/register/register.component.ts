import { Component, OnInit,ElementRef, ViewChild } from '@angular/core';
import {Router} from '@angular/router';

import { NgForm, NgModel, NgModelGroup } from '@angular/forms';
import { FormControl,  FormGroup , FormBuilder,Validators,FormGroupDirective} from '@angular/forms';
import {ErrorStateMatcher} from '@angular/material/core';
import { FormArray } from '@angular/forms';
import {Observable} from 'rxjs';
import {startWith, map} from 'rxjs/operators';

import { MatButtonModule,  MatMenuModule,  MatToolbarModule,  MatIconModule,  MatCardModule,  
  MatFormFieldModule,  MatInputModule,  MatDatepickerModule,  MatDatepicker,  
  MatNativeDateModule,  MatRadioModule,  MatSelectModule,  MatOptionModule,  
  MatSlideToggleModule,ShowOnDirtyErrorStateMatcher } from '@angular/material';  

  import { FormserviceService } from '../formservice.service';

  
export interface Emp {
  name: string;
  project: string;
  id: any;
  mobile: any;
  email: any;
}

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  RegForm: FormGroup;  
  name:string='';  
  id:any;
  email:any='';
  mobile:any;
  project:string='';

 // RegForm = new FormGroup ({
  
    // name:new FormControl('',Validators.required),
    // mobile:new FormControl('',[ Validators.required]),
    // id:new FormControl('',[ Validators.required]),
    // emailForm : new FormControl('', [Validators.required,Validators.email, ]),
    // project:new FormControl('',Validators.required),
  //});


  FormData={'name':'','id':'','mobile':'','email':'','project':''}
  
  constructor(private router: Router,private fb: FormBuilder,private fs:FormserviceService) { 

    this.RegForm = fb.group({  
      'name' : [null, Validators.required],  
      'id' : [null, Validators.compose([Validators.required,Validators.minLength(4) ])],  
      'email':[null, Validators.compose([Validators.required,Validators.email])],  
      //'mobile' : [null,Validators.compose([Validators.required,Validators.minLength(10),Validators.maxLength(10) ])],
      
      'mobile': new FormControl(null, Validators.compose([
          Validators.required,Validators.minLength(10),Validators.maxLength(10),
          Validators.pattern('^[0-9]+$') ])),

      'project' : [null, Validators.required],
        
    })


  

  }
  s:string;

    
  ngOnInit() {

    this.s=btoa('hiii');
    console.log('s value',this.s);
    console.log('s decode value: ',atob(this.s))
  console.log('hello in btoa: ',btoa("helloo"));
  console.log('atob: ',atob('aGVsbG9v'))
  }


  onSubmit()  
  {  
    console.log(JSON.stringify(this.RegForm.value));  

    alert('Added successfully')
    
     this.FormData=this.RegForm.value;
     console.log(JSON.stringify( this.FormData));
    //alert(JSON.stringify(this.stateForm.value));


    this.fs.getForm(this.FormData)

     
  }  


  backPage () {
    this.router.navigateByUrl('/');
   }


   empPage () {
    this.router.navigateByUrl('/details');
   }


}
