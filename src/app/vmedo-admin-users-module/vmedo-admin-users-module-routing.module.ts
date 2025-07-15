import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ManageAdminUsersComponent } from './manage-admin-users/manage-admin-users.component';
import { CreateAdminUsersComponent } from './create-admin-users/create-admin-users.component';
import { EditAdminUsersComponent } from './edit-admin-users/edit-admin-users.component';

const routes: Routes = [
  { path: 'manageadminusers', component: ManageAdminUsersComponent },
  { path: 'createadminuser', component: CreateAdminUsersComponent },
  { path: 'editadminuser', component: EditAdminUsersComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VmedoAdminUsersModuleRoutingModule { }
