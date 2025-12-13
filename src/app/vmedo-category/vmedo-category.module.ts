import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TezHealthComponent } from './tez-health/tez-health-category.component';
import { CategoryComponent } from './tez-category/category/category.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatBadgeModule } from '@angular/material/badge';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatChipsModule } from '@angular/material/chips';
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
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';
import { MatTabsModule } from '@angular/material/tabs';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTooltipModule } from '@angular/material/tooltip';
import { VmedoCategoryRoutingModule } from './vmedo-category-routing.module';
import { CreateCategoryComponent } from './tez-category/create-category/create-category.component';
import { TezProductComponent } from './product/tez-product/tez-product.component';
import { TezProductVariantComponent } from './product-variant/tez-product-variant/tez-product-variant.component';
import { CreateProductComponent } from './product/create-product/create-product.component';
import { CreateProductVariantComponent } from './product-variant/create-product-variant/create-product-variant.component';
import { UpdateProductVariantComponent } from './product-variant/update-product-variant/update-product-variant.component';
import { UpdateProductComponent } from './product/update-product/update-product.component';

@NgModule({
  declarations: [
    TezHealthComponent,
    CategoryComponent,
    CreateCategoryComponent,
    TezProductComponent,
    TezProductVariantComponent,
    CreateProductComponent,
    CreateProductVariantComponent,
    UpdateProductVariantComponent,
    UpdateProductComponent
  ],
  imports: [
    CommonModule,
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
    MatButtonModule,
    MatChipsModule,
    MatMenuModule,
    MatPaginatorModule,
    MatTabsModule,
    MatSortModule,
    MatTooltipModule,
    MatCheckboxModule,
    MatBadgeModule,
    MatToolbarModule,
    MatCardModule,
    MatSelectModule,
    MatSlideToggleModule,
    VmedoCategoryRoutingModule
  ]
})
export class VmedoCategoryModule { }
