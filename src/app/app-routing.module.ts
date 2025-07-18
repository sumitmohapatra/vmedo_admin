import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VmedoAdminLoginComponent } from './vmedo-admin-login/vmedo-admin-login.component';
import { AppComponent } from './app.component';
import { VmedoAdminDashboardComponent } from './vmedo-admin-dashboard/vmedo-admin-dashboard.component';
import { AuthGuard } from './authentication-services/_helpers';
import { VmedoPageNotFoundComponent } from './vmedo-page-not-found/vmedo-page-not-found.component';
import { RoleGuard } from './authentication-services/role.guard';
import { ManageVmedoCorporatesComponent } from './vmedo-corporates-module/manage-vmedo-corporates/manage-vmedo-corporates.component';

const routes: Routes = [
  { path: 'admin-login', component: VmedoAdminLoginComponent },
  {
    path: '', redirectTo: '/admin-login', pathMatch: 'full'
  },
  {
    path: 'admin-dashboard', component: VmedoAdminDashboardComponent,  canActivate: [AuthGuard],
    children: [
      {
        path: 'vmedo-admin-module', canActivate: [RoleGuard], data: { expectedRole: "1" }, loadChildren: () => import('./adminmodule/adminmodule.module').then(m => m.AdminmoduleModule)
      },
      {
        path: 'vmedo-corporate-modules', canActivate: [RoleGuard], data: { expectedRole: "1" }, loadChildren: () => import('./vmedo-corporates-module/vmedo-corporates-module.module').then(m => m.VmedoCorporatesModuleModule)
      },
      {
        path: 'vmedo-admin-settings', canActivate: [RoleGuard], data: { expectedRole: "1" }, loadChildren: () => import('./vmedo-admin-settings-module/vmedo-admin-settings-module.module').then(m => m.VmedoAdminSettingsModuleModule)
      },
      {
        path: 'vmedo-hospitals-module', loadChildren: () => import('./vmedo-hospitals-module/vmedo-hospitals-module.module').then(m => m.VmedoHospitalsModuleModule)
      },
      {
        path: 'vmedo-subscribers-module', loadChildren: () => import('./vmedo-subscribers-module/vmedo-subscribers-module.module').then(m => m.VmedoSubscribersModuleModule)
      },
      {
        path: 'vmedo-adminusers-module',canActivate: [RoleGuard], data: { expectedRole: "1" }, loadChildren: () => import('./vmedo-admin-users-module/vmedo-admin-users-module.module').then(m => m.VmedoAdminUsersModuleModule)
      },
      {
        path: 'vmedo-partner-module', loadChildren: () => import('./vmedo-partner-module/vmedo-partner-module.module').then(m => m.VmedoPartnerModuleModule)
      },
      {
        path: 'vmedo-subscription-module', loadChildren: () => import('./vmedo-subscription-module/vmedo-subscription-module.module').then(m => m.VmedoSubscriptionModuleModule)
      },
      {
        path: 'vmedo-agent', loadChildren: () => import('./agent/agent.module').then(m => m.AgentModule)
      }

    ]
  },
  {
    path:'manage-vmedo-corporates', canActivate: [RoleGuard], data: { expectedRole: "1" },
    component:ManageVmedoCorporatesComponent
  },
    {
    path: '**', // Catch-all route
    component: VmedoPageNotFoundComponent // Replace 'NotFoundComponent' with the component you want to display for invalid paths
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
