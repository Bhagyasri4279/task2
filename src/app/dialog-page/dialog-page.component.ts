import { Component, OnInit,Inject} from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA,} from '@angular/material';
import { CartserviceService } from '../cartservice.service';

export interface DialogData {
  animal: string;
  name: string;
}

@Component({
  selector: 'app-dialog-page',
  templateUrl: './dialog-page.component.html',
  styleUrls: ['./dialog-page.component.css']
})
export class DialogPageComponent implements OnInit {

  constructor( public dialogRef: MatDialogRef<DialogPageComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData,private cs:CartserviceService) { }

  ngOnInit() {
  }


  onNoClick(): void {
    this.dialogRef.close();
  }

  // private c=0;
  private t;

 cart(){
  // this.c = this.c + 1;
  this.cs.addProduct(1);
    // this.t=this.c;
 }

}
