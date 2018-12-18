import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

import { CartserviceService } from '../cartservice.service';

import { MatDialog, MatBottomSheet} from '@angular/material';
import { DialogPageComponent } from '../dialog-page/dialog-page.component';


@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})


export class ProjectsComponent implements OnInit {


  products=[{
  'name': 'string',
  'cost':'number'
  }
]

//private c = 0;

  // addCart()
  // {
      
  //     //alert('Adding this Product to CART')
  //      this.c = this.c + 1;
  //      this.cs.addProduct(this.c);

  // }


  constructor(private router: Router,private cs:CartserviceService,public dialog: MatDialog,) { }

  backPage () {
    this.router.navigateByUrl('/');
 }

  ngOnInit() {
  }



  openDialog(): void {
    const dialogRef = this.dialog.open(DialogPageComponent, {
      width: '300px',
      height:'250px',
     // data: {name: this.name, place: this.place}
      
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      
    });
  }

}
