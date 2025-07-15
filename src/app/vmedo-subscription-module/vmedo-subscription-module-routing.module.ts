import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConfirmDeactivatePackageComponent } from './confirm-deactivate-package/confirm-deactivate-package.component';
import { ActivateCouponComponent } from './activate-coupon/activate-coupon.component';
import { AddPackageSubscriptionComponent } from './add-package-subscription/add-package-subscription.component';
import { ConfirmActivatePackageComponent } from './confirm-activate-package/confirm-activate-package.component';
import { CouponAccessedDetailsComponent } from './coupon-accessed-details/coupon-accessed-details.component';
import { DeactivateCouponComponent } from './deactivate-coupon/deactivate-coupon.component';
import { EditSubscriptionPackageComponent } from './edit-subscription-package/edit-subscription-package.component';
import { ManageCouponComponent } from './manage-coupon/manage-coupon.component';
import { ManagePackageSubscriptionComponent } from './manage-package-subscription/manage-package-subscription.component';
import { ManageSubscriptionComponent } from './manage-subscription/manage-subscription.component';

const routes: Routes = [
  
  { path: 'managesubscription', component: ManageSubscriptionComponent, children: [
    { path: 'addpackage', component: AddPackageSubscriptionComponent },
    { path: 'activatepackage', component: ConfirmActivatePackageComponent },
    { path: 'deactivatepackage', component: ConfirmDeactivatePackageComponent },
    { path: 'managepackage', component: ManagePackageSubscriptionComponent },
    { path: 'managecoupon', component: ManageCouponComponent },
    { path: 'activatecoupon', component: ActivateCouponComponent },
    { path: 'deactivatecoupon', component: DeactivateCouponComponent },
    { path: 'editsubscription', component: EditSubscriptionPackageComponent },
    { path: 'couponaccessed', component: CouponAccessedDetailsComponent },
  ]},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VmedoSubscriptionModuleRoutingModule { }
