import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }    from '@angular/forms';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { DetailsComponent } from './details/details.component';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { SidemenuComponent } from './sidemenu/sidemenu.component';
import { ContentComponent } from './content/content.component';
import { ProjectsComponent } from './projects/projects.component';
import { LocationsComponent } from './locations/locations.component';

import { HttpModule, JsonpModule } from '@angular/http';
import { Http, Response } from "@angular/http";
import { EmpServiceService} from './emp-service.service'
import { HttpClient, HttpClientModule} from '@angular/common/http';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MyModuleModule } from './my-module/my-module.module'

import { LocserviceService } from './models/locservice.service';
import { RegisterComponent } from './register/register.component';
import {FormserviceService} from './formservice.service';
import { CartserviceService } from './cartservice.service';
import { FlexLayoutModule } from "@angular/flex-layout";
import {MatBadgeModule} from '@angular/material/badge';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { LocDatatableService } from './loc-datatable.service'​;

import { MatButtonModule, MatCardModule, MatMenuModule, MatToolbarModule, MatCheckboxModule,MatRadioModule,MatPaginatorModule,
    MatNativeDateModule,MatTableModule,MatDialogModule,MatSliderModule,MatSidenavModule,MatDatepickerModule,MatBottomSheet,
   MatSlideToggleModule,MatIconModule,MatAutocompleteModule, MatInputModule,MatFormFieldModule, MatBottomSheetModule } from '@angular/material';

 import { DialogPageComponent } from './dialog-page/dialog-page.component';
import { BsheetComponent } from './bsheet/bsheet.component';
import { OpenCloseComponent } from './open-close/open-close.component';
import { AnimateComponent } from './animate/animate.component';

@NgModule({

  declarations: [
    AppComponent,
    HomeComponent,
    DetailsComponent,
    SidemenuComponent,
    ContentComponent,
    ProjectsComponent,
    LocationsComponent,
    RegisterComponent,
    DialogPageComponent,
    BsheetComponent,
    OpenCloseComponent,
    AnimateComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpModule, 
    JsonpModule,
    HttpClientModule,
    MyModuleModule,FlexLayoutModule,
    BrowserAnimationsModule,NgxDatatableModule,MatSidenavModule, MatDialogModule,MatBottomSheetModule,MatPaginatorModule,
    ReactiveFormsModule,MatButtonModule, MatCardModule,MatNativeDateModule,MatSliderModule,MatBadgeModule,
     MatMenuModule, MatToolbarModule, MatIconModule,MatRadioModule,MatDatepickerModule,MatTableModule,
     MatAutocompleteModule, MatInputModule,MatFormFieldModule,MatCheckboxModule,MatSlideToggleModule

  ],
  entryComponents: [DialogPageComponent,BsheetComponent],
  providers: [EmpServiceService,HttpClient,LocserviceService,FormserviceService,CartserviceService,LocDatatableService],
  bootstrap: [AppComponent],
  
})
export class AppModule { }
