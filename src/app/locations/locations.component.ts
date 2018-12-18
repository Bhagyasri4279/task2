import { Component, OnInit,ViewChild} from '@angular/core';
import {Router} from '@angular/router';

//import { LocserviceService } from '../models/locservice.service';

import { LocDatatableService } from '../loc-datatable.service'​;
import { MatDialog, MatBottomSheet,MatPaginatorModule} from '@angular/material';
import { DialogPageComponent } from '../dialog-page/dialog-page.component';
import { BsheetComponent } from '../bsheet/bsheet.component';


export type EmpD=[{
  name:string, 
  project:string,
  id:number,
  mobile:number,
  email:any 
    }
   ]


@Component({
  selector: 'app-locations',
  templateUrl: './locations.component.html',
  styleUrls: ['./locations.component.css'],
  
})

export class LocationsComponent implements OnInit {

  EmpList: Array<EmpD>;


   rows=[]; 
   //editing = {};
   temp = [];
   columns = [
    { prop: 'name' },
    { name: 'ID' },
    { name: 'EMAIL'},
  
  ];

  selected=[];
  events = [];
  res: any;
  

   
  constructor(private router: Router,private ld:LocDatatableService,public dialog: MatDialog, public bottomSheet:MatBottomSheet) { }
    

  backPage () {
    this.router.navigateByUrl('/');
   }
  
  ngOnInit() {

    this.ld.getEmp().subscribe(data => {
      this.EmpList = data;
      console.log(this.EmpList)
      this.rows=this.EmpList;
      console.log(this.rows)
      this.temp=this.EmpList
      console.log('temp',this.temp)
    })

  }

  
  // updateValue(event, cell, rowIndex) {
  //   console.log('inline editing rowIndex', rowIndex)
  //   this.editing[rowIndex + '-' + cell] = false;
  //   this.rows[rowIndex][cell] = event.target.value;
  //   this.rows = [...this.rows];
  //   console.log('UPDATED!', this.rows[rowIndex][cell]);
  // }


  updateFilter(event) {
   // console.log('temp', this.temp);
   // console.log('event....',JSON.stringify(event.target.value))
  
    const val = event.target.value.toLowerCase();
    //console.log('val...',val)

    const temp = this.temp.filter(function(d) {

      //console.log('temp1....',d.name);

      return d.name.toLowerCase().indexOf(val) !== -1 || !val;
      
    });
      
    this.rows = temp;
      
   }

   onSelect({ selected }) {
    
    console.log('Select Event', this.selected);

  }
  
  onActivate(event) {
    console.log('Activate Event', event);
  }

  place: string;
  name: string;
   
  openDialog(): void {
    const dialogRef = this.dialog.open(DialogPageComponent, {
      width: '500px',
      height:'300px',
      data: {name: this.name, place: this.place}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.place = result;
    });
  }


  openBottomSheet(): void {
    this.bottomSheet.open(BsheetComponent);
  }

  

}
