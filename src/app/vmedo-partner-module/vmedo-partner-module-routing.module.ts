import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VmedoPartnersComponent } from './vmedo-partners/vmedo-partners.component';
import { AddVmedoPartnerComponent } from './add-vmedo-partner/add-vmedo-partner.component';
import { EditPartnerDetailsComponent } from './edit-partner-details/edit-partner-details.component';
import { SearchVmedoPartnerComponent } from './search-vmedo-partner/search-vmedo-partner.component';
import { VmedoPartnerDetailsComponent } from './vmedo-partner-details/vmedo-partner-details.component';
import { VmedoTotalPartnersComponent } from './vmedo-total-partners/vmedo-total-partners.component';
import { CreateVmedoPartnerComponent } from './create-vmedo-partner/create-vmedo-partner.component';
import { UpdateVmedoPartnerAddressComponent } from './update-vmedo-partner-address/update-vmedo-partner-address.component';
import { AddVmedoPartnerAddressComponent } from './add-vmedo-partner-address/add-vmedo-partner-address.component';


const routes: Routes = [
  { path: 'vmedo-partner', component: VmedoPartnersComponent, children: [
    { path: 'add-partner', component: AddVmedoPartnerComponent },
    { path: 'search-partner', component: SearchVmedoPartnerComponent },
    { path: 'edit-partner', component: EditPartnerDetailsComponent },
    { path: 'vmedo-partners', component: VmedoTotalPartnersComponent },
    { path: 'vmedo-partner-details', component: VmedoPartnerDetailsComponent },
    { path: 'create-vmedo-partner', component: CreateVmedoPartnerComponent },
    { path: 'add-vmedo-partner-address', component: AddVmedoPartnerAddressComponent },
    { path: 'update-vmedo-partner-address', component: UpdateVmedoPartnerAddressComponent },

  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VmedoPartnerModuleRoutingModule { }
