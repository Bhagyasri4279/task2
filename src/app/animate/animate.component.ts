import { Component, OnInit,Input } from '@angular/core';
import { trigger, state, style, animate, transition,keyframes } from '@angular/animations';

@Component({
  selector: 'app-animate',
  templateUrl: './animate.component.html',
  styleUrls: ['./animate.component.css'],
  
  animations: [
    trigger('changeState', [
      state('state1', style({
        backgroundColor: 'green',
        transform: 'scale(1)'
      })),
      state('state2', style({
        backgroundColor: 'red',
        transform: 'scale(1.5)'
      })),
      transition('*=>state1', animate('2000ms')),
      transition('*=>state2', animate('3s', keyframes([
            style({ backgroundColor: 'orange', offset: 0}),
            style({ backgroundColor: 'red', offset: 0.2}),
           style({ backgroundColor: 'blue', offset: 1.0})
           ])))
    ])
  ]

})
export class AnimateComponent implements OnInit {

  @Input() currentState;

  constructor() { }

  ngOnInit() {
  }

}
