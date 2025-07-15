import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminsettingsComponent } from './adminsettings/adminsettings.component';
import { UpdateemergencyhandleComponent } from './updateemergencyhandle/updateemergencyhandle.component';
import { EditPartnerTypeComponent } from './edit-partner-type/edit-partner-type.component';
import { EmergencySubcategoryDetailsComponent } from './emergency-subcategory-details/emergency-subcategory-details.component';
import { ManageEmergencySubcategoryComponent } from './manage-emergency-subcategory/manage-emergency-subcategory.component';
import { ManagePartnerTypeComponent } from './manage-partner-type/manage-partner-type.component';
import { ManagebedtypeComponent } from './managebedtype/managebedtype.component';
import { ManageemergencyhandledComponent } from './manageemergencyhandled/manageemergencyhandled.component';
import { ManagespecializationComponent } from './managespecialization/managespecialization.component';
import { UpdatebedtypeComponent } from './updatebedtype/updatebedtype.component';
import { UpdatespecializationComponent } from './updatespecialization/updatespecialization.component';
import { ManagePartnerCitiesComponent } from './manage-partner-cities/manage-partner-cities.component';
import { UpdatePartnerCityComponent } from './update-partner-city/update-partner-city.component';
import { ManagePartnerSkillsComponent } from './manage-partner-skills/manage-partner-skills.component';
import { UpdatePartnerSkillsComponent } from './update-partner-skills/update-partner-skills.component';

const routes: Routes = [
  {
    path: 'adminsettings', component: AdminsettingsComponent,
    children: [
      { path: 'managebedtype', component: ManagebedtypeComponent },
      { path: 'managespecialization', component: ManagespecializationComponent },
      { path: 'manageemergencyhandled', component: ManageemergencyhandledComponent },
      { path: 'updatespecialization', component: UpdatespecializationComponent },
      { path: 'updateemergencyhandle', component: UpdateemergencyhandleComponent },
      { path: 'updatebedtype', component: UpdatebedtypeComponent },
      { path: 'emergencysubcategory', component: ManageEmergencySubcategoryComponent },
      { path: 'subcategorydetails', component: EmergencySubcategoryDetailsComponent },
      { path: 'manage-partner-type', component: ManagePartnerTypeComponent },
      { path: 'edit-partner-type', component: EditPartnerTypeComponent },
      { path: 'manage-partner-cities', component: ManagePartnerCitiesComponent },
      { path: 'update-partner-city', component: UpdatePartnerCityComponent },
      { path: 'manage-partner-skills', component: ManagePartnerSkillsComponent },
      { path: 'update-partner-skills', component: UpdatePartnerSkillsComponent },

    ]

  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VmedoAdminSettingsModuleRoutingModule { }
