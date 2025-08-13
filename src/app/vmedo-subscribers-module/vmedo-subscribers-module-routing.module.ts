import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CorporateCardsComponent } from './corporate-cards/corporate-cards.component';
import { CreateduserdetailsComponent } from './createduserdetails/createduserdetails.component';
import { DownloadCorporateCardComponent } from './download-corporate-card/download-corporate-card.component';
import { DownloademidComponent } from './downloademid/downloademid.component';
import { EmergencyCardsComponent } from './emergency-cards/emergency-cards.component';
import { EmergencyidComponent } from './emergencyid/emergencyid.component';
import { EmergencyidaccessedComponent } from './emergencyidaccessed/emergencyidaccessed.component';
import { PaidSubscribersComponent } from './paid-subscribers/paid-subscribers.component';
import { RegisteredusersComponent } from './registeredusers/registeredusers.component';
import { UseremergencyiddetailsComponent } from './useremergencyiddetails/useremergencyiddetails.component';
import { VmedoSubscribersComponent } from './vmedo-subscribers/vmedo-subscribers.component';
import { ManageVmedoSubscribersComponent } from './manage-vmedo-subscribers/manage-vmedo-subscribers.component';
import { VmedoPremiumSubscribersComponent } from './vmedo-premium-subscribers/vmedo-premium-subscribers.component';
import { VmedoRenewedUserComponent } from './vmedo-renewed-user/vmedo-renewed-user.component'; 

const routes: Routes = [
  { path: 'registeredusers', component: RegisteredusersComponent },
  { path: 'subscribers', component: VmedoSubscribersComponent },
  { path: 'emergency-cards', component: EmergencyCardsComponent },
  { path: 'emergencyid', component: EmergencyidComponent },
  { path: 'useremergencyid', component: UseremergencyiddetailsComponent },
  { path: 'userdetails', component: CreateduserdetailsComponent },
  { path: 'emergencyidaccessed', component: EmergencyidaccessedComponent },
  { path: 'corporate-cards', component: CorporateCardsComponent },
  { path: 'downloademid', component: DownloademidComponent },
  {
    path: 'download-corporate-card',
    component: DownloadCorporateCardComponent,
  },
  {
    path: 'manage-subscribers',
    component: ManageVmedoSubscribersComponent,
    children: [
      { path: 'subscribers', component: VmedoSubscribersComponent },
      {
        path: 'vmedo-premium-subscribers',
        component: VmedoPremiumSubscribersComponent,
      },
      { path: 'paid-subscribers', component: PaidSubscribersComponent },
      { path: 'vmedo-renewed-user', component: VmedoRenewedUserComponent },
      { path: 'paid-subscribers', component: PaidSubscribersComponent }
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VmedoSubscribersModuleRoutingModule {}
