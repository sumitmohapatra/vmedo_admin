import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ServicesService } from 'src/app/adminservice/services.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-update-product',
  templateUrl: './update-product.component.html',
  styleUrls: ['./update-product.component.css']
})
export class UpdateProductComponent {
 formData: any = {};
  selectedFile: File | null = null;
  imagePreview: any = null;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private adminservice: ServicesService,
    public dialogRef: MatDialogRef<UpdateProductComponent>
  ) {}

  ngOnInit(): void {
    this.formData = {
      Name: this.data.name,
      Description: this.data.description,
      ProductId: this.data.productId
    };

    // PREPOPULATE IMAGE
    this.imagePreview = this.data.imageUrl;
  }

  handleFileInput(event: any) {
    this.selectedFile = event.target.files[0];

    // Preview new image
    const reader = new FileReader();
    reader.onload = (e: any) => this.imagePreview = e.target.result;
    reader.readAsDataURL(this.selectedFile);
  }

  onSubmit() {
    const uploadData = new FormData();

    uploadData.append("Name", this.formData.Name);
    uploadData.append("Description", this.formData.Description);
    uploadData.append("ProductId", this.formData.ProductId);

    if (this.selectedFile) {
      uploadData.append("Image", this.selectedFile);
    }

    this.adminservice.updateProductDetails(uploadData).subscribe({
      next: (res) => {
        Swal.fire("Success!", "Product updated successfully!", "success");
        this.dialogRef.close(true);
      },
      error: (err) => {
        Swal.fire("Error!", "Failed to update product!", "error");
      }
    });
  }

  onClose() {
    this.dialogRef.close();
  }
}
