import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VmedoSubscriptionModuleRoutingModule } from './vmedo-subscription-module-routing.module';
import { ActivateCouponComponent } from './activate-coupon/activate-coupon.component';
import { AddPackageSubscriptionComponent } from './add-package-subscription/add-package-subscription.component';
import { ConfirmActivatePackageComponent } from './confirm-activate-package/confirm-activate-package.component';
import { ConfirmDeactivatePackageComponent } from './confirm-deactivate-package/confirm-deactivate-package.component';
import { CouponAccessedDetailsComponent } from './coupon-accessed-details/coupon-accessed-details.component';
import { CreateCouponCodeComponent } from './create-coupon-code/create-coupon-code.component';
import { DeactivateCouponComponent } from './deactivate-coupon/deactivate-coupon.component';
import { EditSubscriptionPackageComponent } from './edit-subscription-package/edit-subscription-package.component';
import { ManageCouponComponent } from './manage-coupon/manage-coupon.component';
import { ManagePackageSubscriptionComponent } from './manage-package-subscription/manage-package-subscription.component';
import { ManageSubscriptionComponent } from './manage-subscription/manage-subscription.component';
// import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatBadgeModule } from '@angular/material/badge';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatChipsModule } from '@angular/material/chips';
import { MatDialogModule } from '@angular/material/dialog';
import { MatDividerModule } from '@angular/material/divider';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatMenuModule } from '@angular/material/menu';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSelectModule } from '@angular/material/select';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatTableModule } from '@angular/material/table';
import { MatTabsModule } from '@angular/material/tabs';
import { QRCodeModule } from 'angular2-qrcode';
import { MatSortModule } from '@angular/material/sort';
import { NgxEditorModule } from 'ngx-editor';

@NgModule({
  declarations: [
    ActivateCouponComponent,
    AddPackageSubscriptionComponent,
    ConfirmActivatePackageComponent,
    ConfirmDeactivatePackageComponent,
    CouponAccessedDetailsComponent,
    CreateCouponCodeComponent,
    DeactivateCouponComponent,
    EditSubscriptionPackageComponent,
    ManageCouponComponent,
    ManagePackageSubscriptionComponent,
    ManageSubscriptionComponent
  ],
  imports: [
    CommonModule,
    MatDialogModule,
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
    MatSortModule,
    MatAutocompleteModule,
    ReactiveFormsModule,
    // QRCodeModule,
    VmedoSubscriptionModuleRoutingModule,
    NgxEditorModule
  ]
})
export class VmedoSubscriptionModuleModule { }
