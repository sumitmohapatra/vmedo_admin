import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VmedoCorporatesModuleRoutingModule } from './vmedo-corporates-module-routing.module';
import { AddCorporatecreditComponent } from './add-corporatecredit/add-corporatecredit.component';
import { CorporatePlanTypeDetailsComponent } from './corporate-plan-type-details/corporate-plan-type-details.component'; 
import { CreateCorporateComponent } from './create-corporate/create-corporate.component';
import { CreateCorporatePlanComponent } from './create-corporate-plan/create-corporate-plan.component';
import { CreateCorporatePlanTypeComponent } from './create-corporate-plan-type/create-corporate-plan-type.component';
import { ManageCorporatePlansComponent } from './manage-corporate-plans/manage-corporate-plans.component';
import { ManageCorporatesComponent } from './manage-corporates/manage-corporates.component';
import { ManageVmedoCorporatesComponent } from './manage-vmedo-corporates/manage-vmedo-corporates.component';
import { UpdateCorporateComponent } from './update-corporate/update-corporate.component';
import { UpdateCorporatePlanComponent } from './update-corporate-plan/update-corporate-plan.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatDividerModule } from '@angular/material/divider';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatTableModule } from '@angular/material/table';
import { MatTabsModule } from '@angular/material/tabs';
// import { FlexLayoutModule } from '@angular/flex-layout';
import { MatButtonModule } from '@angular/material/button';
import { MatChipsModule } from '@angular/material/chips';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatMenuModule } from '@angular/material/menu';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatBadgeModule } from '@angular/material/badge';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatDialogModule } from '@angular/material/dialog';
import { MatSelectModule } from '@angular/material/select';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatSortModule } from '@angular/material/sort';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTooltipModule } from '@angular/material/tooltip';
// import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';


@NgModule({
  declarations: [
    AddCorporatecreditComponent,
    CorporatePlanTypeDetailsComponent,
    CreateCorporateComponent,
    CreateCorporatePlanComponent,
    CreateCorporatePlanTypeComponent,
    ManageCorporatePlansComponent,
    ManageCorporatesComponent,
    ManageVmedoCorporatesComponent,
    UpdateCorporateComponent,
    UpdateCorporatePlanComponent
  ],
  imports: [
    CommonModule,
    MatDialogModule,
    MatDividerModule,
    MatFormFieldModule,
    FormsModule,
    ReactiveFormsModule,
    MatIconModule,
    MatTableModule,
    MatSidenavModule,
    MatListModule,
    MatGridListModule,
    MatInputModule,
    // FlexLayoutModule,
    MatButtonModule,
    MatChipsModule,
    MatMenuModule,
    MatPaginatorModule,
    MatTabsModule,
    

 
    MatSortModule,
    MatTooltipModule,
    MatCheckboxModule,
    MatBadgeModule,
    // NgMultiSelectDropDownModule,

    

    MatToolbarModule,
    MatCardModule,
 
    MatSelectModule,

    MatSlideToggleModule,
    VmedoCorporatesModuleRoutingModule
  ]
})
export class VmedoCorporatesModuleModule { }
