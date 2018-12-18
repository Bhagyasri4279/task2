import { Component, OnInit } from '@angular/core';
import { MatBottomSheetRef} from '@angular/material';

@Component({
  selector: 'app-bsheet',
  templateUrl: './bsheet.component.html',
  styleUrls: ['./bsheet.component.css']
})
export class BsheetComponent implements OnInit {

  constructor(private bottomSheetRef: MatBottomSheetRef<BsheetComponent>) { }

  ngOnInit() {
  }

  openLink(event: MouseEvent): void {
    this.bottomSheetRef.dismiss();
    event.preventDefault();
  }

}
