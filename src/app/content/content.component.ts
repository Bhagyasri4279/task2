import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { FormserviceService } from '../formservice.service';
import {  trigger, state, style, animate, transition } from '@angular/animations';

import { RouterOutlet } from '@angular/router';
// import { slideInAnimation } from './animations';


@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css'],
  animations: [
    //slideInAnimation
  ]

})
export class ContentComponent implements OnInit {

  DepList = [{
    'name': 'Sales',
    'location': 'Mcity',
    'company': 'mss'
  },
  {
    'name': 'B2B',
    'location': 'MValley',
    'company': 'miracle'
  },
  {
    'name': 'AppDev',
    'location': 'MHeights',
    'company': 'mir'
  },
  {
    'name': 'Innovation',
    'location': 'MCity',
    'company': 'mss'
  }]


  constructor(private router: Router,private fs:FormserviceService) { }

  backPage () {
    this.router.navigateByUrl('/');
 }


  ngOnInit() {
   
  }

  prepareRoute(outlet: RouterOutlet) {
    return outlet && outlet.activatedRouteData && outlet.activatedRouteData['animation'];
  }


  title = 'angularanimation01';
  toState = 'state1';
  changeState(state: any) {
    this.toState = state;
  }


}
