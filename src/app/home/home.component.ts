import { Component, OnInit } from '@angular/core';
import { CartserviceService } from '../cartservice.service';
import { Subscription } from 'rxjs';

import {MatBadgeModule} from '@angular/material/badge';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  hproduct=[{
    'name':'string',
    'cost':'number'
  }]

  cn:number;
  

  constructor(private cs:CartserviceService) {
    
   }
 
 
  ngOnInit() {

    this.cs.cService().subscribe( cn => {
      this.cn = cn
    })
    
  }

}
