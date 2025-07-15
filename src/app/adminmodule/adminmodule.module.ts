import { NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { AdminmoduleRoutingModule, adminRoutingComponents } from './adminmodule-routing.module';
import {MatCardModule} from '@angular/material/card';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatMenuModule } from '@angular/material/menu';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatTableModule} from '@angular/material/table';
import {MatDialogModule} from '@angular/material/dialog';
import { MatPaginatorModule, PageEvent } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatTooltipModule } from '@angular/material/tooltip';
import { HttpClientModule } from '@angular/common/http';
import {MatChipsModule} from '@angular/material/chips';
import {MatIconModule} from '@angular/material/icon';
import{MatSelectModule} from '@angular/material/select';
// import { FlexLayoutModule } from '@angular/flex-layout';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatBadgeModule} from '@angular/material/badge';
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';
import { MatTabsModule } from '@angular/material/tabs';
// import { NgImageFullscreenViewModule } from 'ng-image-fullscreen-view';
// import {JustLightboxModule} from 'just-lightbox';


import { MatExpansionModule } from '@angular/material/expansion';


import {MatAutocompleteModule} from '@angular/material/autocomplete';





@NgModule({
  declarations: [
    adminRoutingComponents
  

  ],
  
  imports: [
    CommonModule,
    AdminmoduleRoutingModule,
    MatCardModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatChipsModule,
    MatIconModule,
    MatFormFieldModule,
    FormsModule,
    MatInputModule,
    MatSelectModule,
    HttpClientModule,
    ReactiveFormsModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatListModule,
    MatGridListModule,
    MatCardModule,
    MatMenuModule,
    MatSlideToggleModule,
    MatTableModule,
    MatDialogModule,
    MatPaginatorModule,
    MatSortModule,
    MatTooltipModule,
    // FlexLayoutModule,
    MatCheckboxModule,
    MatBadgeModule,
    // NgMultiSelectDropDownModule,
    MatTabsModule,
    // NgImageFullscreenViewModule,

    // JustLightboxModule.forRoot(),
    MatExpansionModule,

    MatAutocompleteModule

  ],
  providers: [DatePipe],
})
export class AdminmoduleModule { }
