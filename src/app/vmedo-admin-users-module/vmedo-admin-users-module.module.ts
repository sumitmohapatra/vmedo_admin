import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VmedoAdminUsersModuleRoutingModule } from './vmedo-admin-users-module-routing.module';
import { CreateAdminUsersComponent } from './create-admin-users/create-admin-users.component';
import { EditAdminUsersComponent } from './edit-admin-users/edit-admin-users.component';
import { ManageAdminUsersComponent } from './manage-admin-users/manage-admin-users.component';
import { MatDividerModule } from '@angular/material/divider';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
// import { FlexLayoutModule } from '@angular/flex-layout';
import { MatButtonModule } from '@angular/material/button';
import { MatChipsModule } from '@angular/material/chips';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatMenuModule } from '@angular/material/menu';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatSortModule } from '@angular/material/sort';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatBadgeModule } from '@angular/material/badge';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';
import { MatDialogModule } from '@angular/material/dialog';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCardModule } from '@angular/material/card';
import { MatSelectModule } from '@angular/material/select';


@NgModule({
  declarations: [
    CreateAdminUsersComponent,
    EditAdminUsersComponent,
    ManageAdminUsersComponent
  ],
  imports: [
    CommonModule,
    MatDividerModule,
    FormsModule,
    MatIconModule,
    MatFormFieldModule,
    MatSidenavModule,
    MatListModule,
    MatGridListModule,
    MatSortModule,
    MatTooltipModule,
    MatCheckboxModule,
    MatDialogModule,
    MatBadgeModule,
    // NgMultiSelectDropDownModule,
    MatInputModule,
    // FlexLayoutModule,
    MatButtonModule,
    MatChipsModule,
    MatMenuModule,
    MatTableModule,
    MatPaginatorModule,
    

    MatToolbarModule,
    MatCardModule,
 
    MatSelectModule,

    MatSlideToggleModule,

    VmedoAdminUsersModuleRoutingModule
  ]
})
export class VmedoAdminUsersModuleModule { }
