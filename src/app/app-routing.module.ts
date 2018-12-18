import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { DetailsComponent } from './details/details.component';
import { SidemenuComponent } from './sidemenu/sidemenu.component';
import { ContentComponent } from './content/content.component';
import { ProjectsComponent } from './projects/projects.component';
import { LocationsComponent } from './locations/locations.component';
import { RegisterComponent } from './register/register.component';
import { OpenCloseComponent } from './open-close/open-close.component';

const routes: Routes = [
  { path: '', component: HomeComponent,
children: [
  {path:'',component:SidemenuComponent},
{ path: 'details', component: DetailsComponent },
{ path: 'content', component: ContentComponent },
{ path: 'projects', component: ProjectsComponent },
{ path: 'locations', component:LocationsComponent },
{ path: 'register', component:RegisterComponent },
{ path:'open-close',component:OpenCloseComponent },

] }
 
];

@NgModule({
  
  imports: [ RouterModule.forRoot(routes) ],
  exports:[ RouterModule ]
  
})
export class AppRoutingModule { }
