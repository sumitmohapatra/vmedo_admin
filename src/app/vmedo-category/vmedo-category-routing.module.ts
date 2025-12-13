import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { TezHealthComponent } from "./tez-health/tez-health-category.component";
import { CategoryComponent } from "./tez-category/category/category.component";
import { TezProductComponent } from "./product/tez-product/tez-product.component";
import { TezProductVariantComponent } from "./product-variant/tez-product-variant/tez-product-variant.component";


const routes: Routes = [
  { path: '', component: TezHealthComponent, children: [
   { path: 'manage-category', component: CategoryComponent },
   { path:'manage-product', component:TezProductComponent},
   { path:'manage-product-variant', component:TezProductVariantComponent},
  ]},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class VmedoCategoryRoutingModule { }