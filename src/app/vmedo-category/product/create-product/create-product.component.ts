import { HttpClient } from '@angular/common/http';
import { Component, ViewEncapsulation } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { ServicesService } from 'src/app/adminservice/services.service';
import { CreateCorporateComponent } from 'src/app/vmedo-corporates-module/create-corporate/create-corporate.component';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-create-product',
  templateUrl: './create-product.component.html',
  styleUrls: ['./create-product.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class CreateProductComponent {
selectedFile: File;
categoryList: any[] = [];

constructor(
  private adminservice: ServicesService,
  private http: HttpClient,
  public dialogRef: MatDialogRef<CreateProductComponent>
) { }

ngOnInit(): void {
  // Fetch categories from service
  this.adminservice.getCategoryDetails().subscribe((res:any) => {
    this.categoryList = res.objret;     // assuming your API structure
  });
}

handleFileInput(files: FileList) {
  this.selectedFile = files.item(0);
}

onSubmit(myForm: any) {
  if (!this.selectedFile) {
    alert("Please select an image");
    return;
  }

  const formData = new FormData();

  // Append fields exactly as API expects
  formData.append('CategoryId', myForm.value.categoryId);
  formData.append('Name', myForm.value.name);
  formData.append('Description', myForm.value.description);
  formData.append('Image', this.selectedFile);

  this.adminservice.addProduct(formData).subscribe(
    response => {
      console.log('Success:', response);
      this.successNotification();
      this.dialogRef.close(true);
      myForm.reset();
    },
    error => {
      console.error('Error:', error);
    }
  );
}

successNotification() {
  Swal.fire('New Product', 'Created Successfully!', 'success');
}

onClose() {
  this.dialogRef.close();
}

}
