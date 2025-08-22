import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VmedoSubscribersModuleRoutingModule } from './vmedo-subscribers-module-routing.module';
import { RegisteredusersComponent } from './registeredusers/registeredusers.component';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatTableModule } from '@angular/material/table';
import { CorporateCardsComponent } from './corporate-cards/corporate-cards.component';
import { CreateduserdetailsComponent } from './createduserdetails/createduserdetails.component';
import { DownloadCorporateCardComponent } from './download-corporate-card/download-corporate-card.component';
import { DownloademidComponent } from './downloademid/downloademid.component';
import { EmergencyCardsComponent } from './emergency-cards/emergency-cards.component';
import { EmergencyidComponent } from './emergencyid/emergencyid.component';
import { EmergencyidaccessedComponent } from './emergencyidaccessed/emergencyidaccessed.component';
import { PaidSubscribersComponent } from './paid-subscribers/paid-subscribers.component';
import { UseremergencyiddetailsComponent } from './useremergencyiddetails/useremergencyiddetails.component';
import { VmedoSubscribersComponent } from './vmedo-subscribers/vmedo-subscribers.component';
// import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatBadgeModule } from '@angular/material/badge';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatChipsModule } from '@angular/material/chips';
import { MatDividerModule } from '@angular/material/divider';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatMenuModule } from '@angular/material/menu';
import { MatSelectModule } from '@angular/material/select';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatTabsModule } from '@angular/material/tabs';
import { MatDialogModule } from '@angular/material/dialog';
// import { QRCodeModule } from 'angular2-qrcode';
import { MatSortModule } from '@angular/material/sort';
import { ManageVmedoSubscribersComponent } from './manage-vmedo-subscribers/manage-vmedo-subscribers.component';
import { VmedoPremiumSubscribersComponent } from './vmedo-premium-subscribers/vmedo-premium-subscribers.component';
import { VmedoRenewedUserComponent } from './vmedo-renewed-user/vmedo-renewed-user.component';
import { QRCodeModule } from 'angularx-qrcode';


@NgModule({
  declarations: [
    RegisteredusersComponent,
    CorporateCardsComponent,
    CreateduserdetailsComponent,
    DownloadCorporateCardComponent,
    DownloademidComponent,
    EmergencyCardsComponent,
    EmergencyidComponent,
    EmergencyidaccessedComponent,
    PaidSubscribersComponent,
    UseremergencyiddetailsComponent,
    VmedoSubscribersComponent,
    ManageVmedoSubscribersComponent,
    VmedoPremiumSubscribersComponent,
    VmedoRenewedUserComponent
  ],
  imports: [
    CommonModule,
    MatDialogModule,
    VmedoSubscribersModuleRoutingModule,
    MatDividerModule,
    MatFormFieldModule,
    FormsModule,
    MatSidenavModule,
    MatListModule,
    MatGridListModule,
    // MatInputModule,
    // FlexLayoutModule,
    MatButtonModule,
    MatChipsModule,
    MatMenuModule,
    MatIconModule,
    MatTableModule,
    MatPaginatorModule,
    MatTabsModule,
    MatBadgeModule,
    MatCardModule,
    MatSelectModule,
    MatSortModule,
    // QRCodeModule,
    MatAutocompleteModule,
    ReactiveFormsModule,
    QRCodeModule
  ]
})
export class VmedoSubscribersModuleModule { }
