import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatInputModule, MatTableModule, MatToolbarModule } from '@angular/material';



@NgModule({
  imports: [
    CommonModule,
    MatInputModule,
     MatTableModule, 
     MatToolbarModule 
  ],

  exports: [
    CommonModule,
    MatInputModule,
     MatTableModule, 
     MatToolbarModule 
  ],

  declarations: []
})
export class MyModuleModule { }
