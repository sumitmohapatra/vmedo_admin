import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VmedoHospitalsModuleRoutingModule } from './vmedo-hospitals-module-routing.module';
import { AllhospitalsComponent } from './allhospitals/allhospitals.component';
import { ApprovedhospitalComponent } from './approvedhospital/approvedhospital.component';
import { ApproveemergencyhandledComponent } from './approveemergencyhandled/approveemergencyhandled.component';
import { ApprovespecializationComponent } from './approvespecialization/approvespecialization.component';
import { BlockedhospitaldetailsComponent } from './blockedhospitaldetails/blockedhospitaldetails.component';
import { HospitalchangesdetailsComponent } from './hospitalchangesdetails/hospitalchangesdetails.component';
import { HospitalchangeslistComponent } from './hospitalchangeslist/hospitalchangeslist.component';
import { HospitalupdatedetailsComponent } from './hospitalupdatedetails/hospitalupdatedetails.component';
import { HospitalupdaterequestComponent } from './hospitalupdaterequest/hospitalupdaterequest.component';
import { HospitalupdatesComponent } from './hospitalupdates/hospitalupdates.component';
import { PendinghospitalsComponent } from './pendinghospitals/pendinghospitals.component';
import { RegisteredhospitalsComponent } from './registeredhospitals/registeredhospitals.component';
import { RejectedhospitalsComponent } from './rejectedhospitals/rejectedhospitals.component';
import { UnblockhospitalComponent } from './unblockhospital/unblockhospital.component';
import { MatDividerModule } from '@angular/material/divider';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatTableModule } from '@angular/material/table';
import { MatTabsModule } from '@angular/material/tabs';

import { MatBadgeModule } from '@angular/material/badge';

import { HospitallistComponent } from './hospitallist/hospitallist.component';
import { MatCardModule } from '@angular/material/card';
import { HospitaldetailsComponent } from './hospitaldetails/hospitaldetails.component';
import { MatSortModule } from '@angular/material/sort';



@NgModule({
  declarations: [
    AllhospitalsComponent,
    ApprovedhospitalComponent,
    ApproveemergencyhandledComponent,
    ApprovespecializationComponent,
    BlockedhospitaldetailsComponent,
    HospitalchangesdetailsComponent,
    HospitalchangeslistComponent,
    HospitallistComponent,
    HospitaldetailsComponent,
    HospitalupdatedetailsComponent,
    HospitalupdaterequestComponent,
    HospitalupdatesComponent,
    PendinghospitalsComponent,
    RegisteredhospitalsComponent,
    RejectedhospitalsComponent,
    UnblockhospitalComponent
  ],
  imports: [
    CommonModule,
    MatDividerModule,
    MatFormFieldModule,
    FormsModule,
    MatIconModule,
    MatTableModule,
    MatPaginatorModule,
    MatTabsModule,
    MatBadgeModule,
    MatCardModule,
    MatSortModule,
    VmedoHospitalsModuleRoutingModule
  ]
})
export class VmedoHospitalsModuleModule { }
