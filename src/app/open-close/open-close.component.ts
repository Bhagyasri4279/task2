import { Component, OnInit } from '@angular/core';
import {  trigger, state, style, animate, transition,keyframes } from '@angular/animations'; 
import {Router} from '@angular/router';

@Component({
  selector: 'app-open-close',
  templateUrl: './open-close.component.html',
  styleUrls: ['./open-close.component.css'],
  animations: [
    trigger('openClose', [
      // ...
      state('open', style({
        height: '200px',
        opacity: 1,
        backgroundColor: 'skyblue'
      })),
      state('closed', style({
        height: '100px',
        opacity: 0.5,
        backgroundColor: 'green'
      })),
      transition('open => closed', [
        animate('1s')
      ]),
      transition('closed => open', [
        animate('0.5s')
      ]),
    ]),
    // transition('* => inactive', [
    //   animate('2s', keyframes([
    //     style({ backgroundColor: 'orange', offset: 0}),
    //     style({ backgroundColor: 'red', offset: 0.2}),
    //     style({ backgroundColor: 'blue', offset: 1.0})
    //   ]))
    // ]),

  ],

})
export class OpenCloseComponent implements OnInit {

  isOpen = true;
 
  toggle() {
    this.isOpen = !this.isOpen;
  }

  constructor(private router: Router) { }

  
  backPage () {
    this.router.navigateByUrl('/content');
 }
 
 status: 'active' | 'inactive' = 'inactive';
 
 toggle1() {
  if (this.status === 'active') {
    this.status = 'inactive';
  } else {
    this.status = 'active';
  }
}

  ngOnInit() {
  }

}
