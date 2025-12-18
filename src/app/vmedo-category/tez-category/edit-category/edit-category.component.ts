import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ServicesService } from 'src/app/adminservice/services.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-edit-category',
  templateUrl: './edit-category.component.html',
  styleUrls: ['./edit-category.component.css']
})
export class EditCategoryComponent {
 formData: any = {};
  selectedFile: File | null = null;
  imagePreview: string | null = null;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private adminservice: ServicesService,
    public dialogRef: MatDialogRef<EditCategoryComponent>
  ) {}

  ngOnInit(): void {
    // Prefill form values
    this.formData = {
      CategoryId: this.data.categoryId,
      Name: this.data.name,
      Description: this.data.description
    };

    // Prepopulate image preview
    this.imagePreview = this.data.imageUrl || null;
  }

  handleFileInput(event: any) {
    const file = event.target.files[0];
    if (!file) return;

    this.selectedFile = file;

    const reader = new FileReader();
    reader.onload = (e: any) => {
      this.imagePreview = e.target.result;
    };
    reader.readAsDataURL(file);
  }

  onSubmit() {
    const uploadData = new FormData();

    uploadData.append('CategoryId', this.formData.CategoryId);
    uploadData.append('Name', this.formData.Name);
    uploadData.append('Description', this.formData.Description);

    // Append image only if user selected new one
    if (this.selectedFile) {
      uploadData.append('Image', this.selectedFile);
    }

    this.adminservice.updateCategoryDetails(uploadData).subscribe({
      next: () => {
        Swal.fire('Success!', 'Category updated successfully!', 'success');
        this.dialogRef.close(true);
      },
      error: (err) => {
        console.error(err);
        Swal.fire('Error!', 'Failed to update category!', 'error');
      }
    });
  }

  onClose() {
    this.dialogRef.close();
  }
}
