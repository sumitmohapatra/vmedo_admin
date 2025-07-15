import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllhospitalsComponent } from './allhospitals/allhospitals.component';
import { ApprovedhospitalComponent } from './approvedhospital/approvedhospital.component';
import { ApproveemergencyhandledComponent } from './approveemergencyhandled/approveemergencyhandled.component';
import { ApprovespecializationComponent } from './approvespecialization/approvespecialization.component';
import { BlockedhospitaldetailsComponent } from './blockedhospitaldetails/blockedhospitaldetails.component';
import { HospitalchangesdetailsComponent } from './hospitalchangesdetails/hospitalchangesdetails.component';
import { HospitalchangeslistComponent } from './hospitalchangeslist/hospitalchangeslist.component';
import { HospitaldetailsComponent } from './hospitaldetails/hospitaldetails.component';
import { HospitallistComponent } from './hospitallist/hospitallist.component';
import { HospitalupdatedetailsComponent } from './hospitalupdatedetails/hospitalupdatedetails.component';
import { HospitalupdaterequestComponent } from './hospitalupdaterequest/hospitalupdaterequest.component';
import { HospitalupdatesComponent } from './hospitalupdates/hospitalupdates.component';
import { PendinghospitalsComponent } from './pendinghospitals/pendinghospitals.component';
import { RegisteredhospitalsComponent } from './registeredhospitals/registeredhospitals.component';
import { RejectedhospitalsComponent } from './rejectedhospitals/rejectedhospitals.component';
import { UnblockhospitalComponent } from './unblockhospital/unblockhospital.component';

const routes: Routes = [
  {
    path: 'hospitallist', component: HospitallistComponent,
    children: [
      { path: 'registeredhospital', component: RegisteredhospitalsComponent },
      { path: 'pendinghospitals', component: PendinghospitalsComponent },
      { path: 'allhospitals', component: AllhospitalsComponent },
      { path: 'blockedhospitals', component: UnblockhospitalComponent },
      { path: 'rejectedhospitals', component: RejectedhospitalsComponent },
      { path: 'approveemergencyhandled', component: ApproveemergencyhandledComponent },
      { path: 'approvespecialization', component: ApprovespecializationComponent },
      { path: 'hospitalchangeslist', component: HospitalchangeslistComponent },
      {
        path: 'hospitalupdaterequest', component: HospitalupdaterequestComponent,
        children: [

          { path: 'hospitalupdates', component: HospitalupdatesComponent },
          { path: 'hospitalupdatedetails', component: HospitalupdatedetailsComponent },

        ]
      }

    ]
  },
  { path: 'hospitaldetails', component: HospitaldetailsComponent },
  { path: 'approvedhospital', component: ApprovedhospitalComponent },
      { path: 'blockedhospitaldetails', component: BlockedhospitaldetailsComponent },
      { path: 'hospitalchangesdetails', component: HospitalchangesdetailsComponent },
  

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VmedoHospitalsModuleRoutingModule { }
