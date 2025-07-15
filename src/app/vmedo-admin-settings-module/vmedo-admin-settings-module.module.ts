import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VmedoAdminSettingsModuleRoutingModule } from './vmedo-admin-settings-module-routing.module';
import { AdminsettingsComponent } from './adminsettings/adminsettings.component';
import { MatTabsModule } from '@angular/material/tabs';
import { EditPartnerTypeComponent } from './edit-partner-type/edit-partner-type.component';
import { EmergencySubcategoryDetailsComponent } from './emergency-subcategory-details/emergency-subcategory-details.component';
import { ManageEmergencySubcategoryComponent } from './manage-emergency-subcategory/manage-emergency-subcategory.component';
import { ManagePartnerTypeComponent } from './manage-partner-type/manage-partner-type.component';
import { ManagebedtypeComponent } from './managebedtype/managebedtype.component';
import { ManageemergencyhandledComponent } from './manageemergencyhandled/manageemergencyhandled.component';
import { ManagespecializationComponent } from './managespecialization/managespecialization.component';
import { UpdatebedtypeComponent } from './updatebedtype/updatebedtype.component';
import { UpdateemergencyhandleComponent } from './updateemergencyhandle/updateemergencyhandle.component';
import { UpdatespecializationComponent } from './updatespecialization/updatespecialization.component';
import { MatDividerModule } from '@angular/material/divider';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatDialogActions, MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
// import { FlexLayoutModule } from '@angular/flex-layout';
import { MatButtonModule } from '@angular/material/button';
import { MatChipsModule } from '@angular/material/chips';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatBadgeModule } from '@angular/material/badge';
import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatMenuModule } from '@angular/material/menu';
import { MatSelectModule } from '@angular/material/select';
import { MatSidenavModule } from '@angular/material/sidenav';
import { ManagePartnerCitiesComponent } from './manage-partner-cities/manage-partner-cities.component';
import { UpdatePartnerCityComponent } from './update-partner-city/update-partner-city.component';
import { ManagePartnerSkillsComponent } from './manage-partner-skills/manage-partner-skills.component';
import { UpdatePartnerSkillsComponent } from './update-partner-skills/update-partner-skills.component';
import { MatSortModule } from '@angular/material/sort';


@NgModule({
  declarations: [
    AdminsettingsComponent,
    EditPartnerTypeComponent,
    EmergencySubcategoryDetailsComponent,
    ManageEmergencySubcategoryComponent,
    ManageEmergencySubcategoryComponent,
    ManagebedtypeComponent,
    ManageemergencyhandledComponent,
    ManagespecializationComponent,
    UpdatebedtypeComponent,
    ManagePartnerTypeComponent,
    UpdateemergencyhandleComponent,
    UpdatespecializationComponent,
    ManagePartnerCitiesComponent,
    UpdatePartnerCityComponent,
    ManagePartnerSkillsComponent,
    UpdatePartnerSkillsComponent
  ],
  imports: [
    CommonModule,
    MatDialogModule,
    MatSortModule,
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
    VmedoAdminSettingsModuleRoutingModule
  ]
})
export class VmedoAdminSettingsModuleModule { }
