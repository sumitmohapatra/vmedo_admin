import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VmedoPartnerModuleRoutingModule } from './vmedo-partner-module-routing.module';
import { AddVmedoPartnerComponent } from './add-vmedo-partner/add-vmedo-partner.component';
import { EditPartnerDetailsComponent } from './edit-partner-details/edit-partner-details.component';
import { SearchVmedoPartnerComponent } from './search-vmedo-partner/search-vmedo-partner.component';
import { VmedoPartnerDetailsComponent } from './vmedo-partner-details/vmedo-partner-details.component';
import { VmedoTotalPartnersComponent } from './vmedo-total-partners/vmedo-total-partners.component';
import { VmedoPartnersComponent } from './vmedo-partners/vmedo-partners.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatBadgeModule } from '@angular/material/badge';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatTableModule } from '@angular/material/table';
import { MatTabsModule } from '@angular/material/tabs';
import { BrowserModule } from '@angular/platform-browser';
import { MatSelectModule } from '@angular/material/select';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
// import { AgmCoreModule } from '@agm/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatListModule } from '@angular/material/list';
import { MatMenuModule } from '@angular/material/menu';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatButtonModule } from '@angular/material/button';
import { MatChipsModule } from '@angular/material/chips';
import { MatInputModule } from '@angular/material/input';
// import { FlexLayoutModule } from '@angular/flex-layout';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { CreateVmedoPartnerComponent } from './create-vmedo-partner/create-vmedo-partner.component';
import { UpdateVmedoPartnerAddressComponent } from './update-vmedo-partner-address/update-vmedo-partner-address.component';
import { AddVmedoPartnerAddressComponent } from './add-vmedo-partner-address/add-vmedo-partner-address.component';
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';
import { MatSortModule } from '@angular/material/sort';
import { GoogleMapsModule } from '@angular/google-maps';

@NgModule({
  declarations: [
    AddVmedoPartnerComponent,
    EditPartnerDetailsComponent,
    SearchVmedoPartnerComponent,
    VmedoPartnerDetailsComponent,
    VmedoTotalPartnersComponent,
    VmedoPartnersComponent,
    CreateVmedoPartnerComponent,
    UpdateVmedoPartnerAddressComponent,
    AddVmedoPartnerAddressComponent
  ],
  imports: [
    CommonModule,
    MatDividerModule,
    MatFormFieldModule,
    FormsModule,
    MatSidenavModule,
    MatListModule,
    MatGridListModule,
    MatInputModule,
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
    MatAutocompleteModule,
    ReactiveFormsModule,
    // AgmCoreModule,
    VmedoPartnerModuleRoutingModule,
    MatDialogModule,
    MatSortModule,
    GoogleMapsModule
    // NgMultiSelectDropDownModule.forRoot()
  ]
})
export class VmedoPartnerModuleModule { }
