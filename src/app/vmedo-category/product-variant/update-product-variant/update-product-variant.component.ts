import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ServicesService } from 'src/app/adminservice/services.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-update-product-variant',
  templateUrl: './update-product-variant.component.html',
  styleUrls: ['./update-product-variant.component.css']
})
export class UpdateProductVariantComponent {
formData: any = {};
productList: any[] = [];

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private adminservice: ServicesService,
    public dialogRef: MatDialogRef<UpdateProductVariantComponent>
  ) {}

  ngOnInit(): void {
    this.adminservice.getProducts().subscribe((res:any) => {
    this.productList = res.data;
  });
    // Prefill values
    this.formData = {
      VariantId: this.data.variantId,
      ProductId: this.data.productId,
      VariantName: this.data.variantName,
      Price: this.data.price,
      DiscountPrice: this.data.discountPrice
    };
  }

  onSubmit() {
    this.adminservice.updateProductVariant(this.formData).subscribe({
      next: (res) => {
        Swal.fire('Success!', 'Variant updated successfully!', 'success');
        this.dialogRef.close(true);
      },
      error: (err) => {
        Swal.fire('Error!', 'Failed to update variant.', 'error');
        console.error(err);
      }
    });
  }

  onClose() {
    this.dialogRef.close();
  }
}
