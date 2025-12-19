import { Component } from '@angular/core';
import { ServicesService } from 'src/app/adminservice/services.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-category-mapping',
  templateUrl: './category-mapping.component.html',
  styleUrls: ['./category-mapping.component.css']
})
export class CategoryMappingComponent {
 categoryList: any[] = [];
  productList: any[] = [];

  selectedCategoryId: string | null = null;
  selectedProductIds: string[] = [];

  loading = false;

  constructor(private adminservice: ServicesService) {}

  ngOnInit(): void {
    this.loadCategories();
    this.loadProducts();
  }

  loadCategories() {
    this.adminservice.getCategoryDetails().subscribe((res: any) => {
      this.categoryList = res.objret || [];
    });
  }

  onCategoryChange(categoryId: string) {
  this.selectedProductIds = []; // reset

  this.adminservice
    .fetchProductsMappingByCategory(categoryId)
    .subscribe((res: any) => {
      this.selectedProductIds = res.data.map(
          (x: any) => x.productIds
        );
    });
}


  loadProducts() {
    this.adminservice.getProducts().subscribe((res: any) => {
      this.productList = res.data || [];
    });
  }

  onProductSelectionChange(productId: string, checked: boolean) {
    if (checked) {
      this.selectedProductIds.push(productId);
    } else {
      this.selectedProductIds =
        this.selectedProductIds.filter(id => id !== productId);
    }
  }

  submitMapping() {
    if (!this.selectedCategoryId || this.selectedProductIds.length === 0) {
      Swal.fire('Warning', 'Please select category and at least one product', 'warning');
      return;
    }

    const payload = {
      CategoryId: this.selectedCategoryId,
      ProductIds: this.selectedProductIds
    };

    this.loading = true;

    this.adminservice.addCategoryProductMapping(payload).subscribe({
      next: () => {
        this.loading = false;
        Swal.fire('Success!', 'Products mapped to category successfully!', 'success');
        this.resetForm();
      },
      error: (err) => {
        this.loading = false;
        console.error(err);
        Swal.fire('Error!', 'Failed to map products', 'error');
      }
    });
  }

  resetForm() {
    this.selectedCategoryId = null;
    this.selectedProductIds = [];
  }
}
