import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateCorporatePlanComponent } from './create-corporate-plan/create-corporate-plan.component';
import { AddCorporatecreditComponent } from './add-corporatecredit/add-corporatecredit.component';
import { CorporatePlanTypeDetailsComponent } from './corporate-plan-type-details/corporate-plan-type-details.component';
import { CreateCorporatePlanTypeComponent } from './create-corporate-plan-type/create-corporate-plan-type.component';
import { CreateCorporateComponent } from './create-corporate/create-corporate.component';
import { ManageCorporatePlansComponent } from './manage-corporate-plans/manage-corporate-plans.component';
import { ManageCorporatesComponent } from './manage-corporates/manage-corporates.component';
import { ManageVmedoCorporatesComponent } from './manage-vmedo-corporates/manage-vmedo-corporates.component';
import { UpdateCorporatePlanComponent } from './update-corporate-plan/update-corporate-plan.component';
import { UpdateCorporateComponent } from './update-corporate/update-corporate.component';

const routes: Routes = [
  { path: 'manage-vmedo-corporates', component: ManageVmedoCorporatesComponent, children: [
    { path: 'manage-corporate', component: ManageCorporatesComponent },
    { path: 'create-corporate', component: CreateCorporateComponent },
    { path: 'update-corporate', component: UpdateCorporateComponent },
    { path: 'create-corporate-plantype', component: CreateCorporatePlanTypeComponent },
    { path: 'create-corporate-plan', component: CreateCorporatePlanComponent },
    { path: 'manage-corporate-plan', component: ManageCorporatePlansComponent },
    { path: 'update-corporate-plan', component: UpdateCorporatePlanComponent },
    {path:'add-corporate-credit', component:AddCorporatecreditComponent},
    {path:'corporate-plan-types', component:CorporatePlanTypeDetailsComponent},
  ]},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VmedoCorporatesModuleRoutingModule { }
