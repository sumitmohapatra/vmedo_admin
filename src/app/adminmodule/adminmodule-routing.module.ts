import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BlooddonordetailsComponent } from './blooddonordetails/blooddonordetails.component';
import { BlooddonorsComponent } from './blooddonors/blooddonors.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { UserhomepagebannersComponent } from './userhomepagebanners/userhomepagebanners.component';



const routes: Routes = [


  {path: 'dashboard', component: DashboardComponent},

  { path: 'blooddonorlist', component: BlooddonorsComponent },

  { path: 'blooddonordetails', component: BlooddonordetailsComponent },

  { path: 'userhomepagebanners', component: UserhomepagebannersComponent },





];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class AdminmoduleRoutingModule { }

export const adminRoutingComponents = [
  DashboardComponent, BlooddonorsComponent,
  BlooddonordetailsComponent,
   UserhomepagebannersComponent,]
