import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-sidemenu',
  templateUrl: './sidemenu.component.html',
  styleUrls: ['./sidemenu.component.css']
})
export class SidemenuComponent implements OnInit {

  constructor(private router: Router) { }

  

 uname="sri";
 upass=123

 openEmp(){
   this.router.navigateByUrl('/details');
 }

 openDep(){
  this.router.navigateByUrl('/content');
}

openEdetails(){
  this.router.navigateByUrl('/locations');
}

openElogin(){
  this.router.navigateByUrl('/register');
}

openProducts(){
  this.router.navigateByUrl('/projects');
}

  ngOnInit() {
  }

}
