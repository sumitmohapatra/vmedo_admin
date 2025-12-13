import { Component, ViewEncapsulation } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { ServicesService } from 'src/app/adminservice/services.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-create-product-variant',
  templateUrl: './create-product-variant.component.html',
  styleUrls: ['./create-product-variant.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class CreateProductVariantComponent {
productList: any[] = [];   // For dropdown of ProductId
  selectedProductId: string;

  constructor(
    private adminservice: ServicesService,
    public dialogRef: MatDialogRef<CreateProductVariantComponent>
  ) {}

  ngOnInit(): void {
    this.loadProducts();
  }

  // Fetch the product list
  loadProducts() {
    this.adminservice.getProducts().subscribe((res: any) => {
      this.productList = res.data;  
    });
  }

  onSubmit(form: any) {
    if (form.invalid) return;

    const payload = {
      ProductId: form.value.productId,
      VariantName: form.value.variantName,
      Price: Number(form.value.price),
      DiscountPrice: Number(form.value.discountPrice)
    };

    this.adminservice.addProductVariant(payload).subscribe({
      next: (response) => {
        Swal.fire('Success!', 'Product Variant Created Successfully!', 'success');
        this.dialogRef.close(true);
      },
      error: (error) => {
        console.error(error);
        Swal.fire('Error', 'Failed to create product variant.', 'error');
      }
    });
  }

  onClose() {
    this.dialogRef.close();
  }
}
