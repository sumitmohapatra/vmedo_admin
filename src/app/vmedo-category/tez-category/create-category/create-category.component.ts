import { HttpClient } from '@angular/common/http';
import { Component, ViewEncapsulation } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { ServicesService } from 'src/app/adminservice/services.service';
import { CreateCorporateComponent } from 'src/app/vmedo-corporates-module/create-corporate/create-corporate.component';
import { environment } from 'src/environments/environment';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-create-category',
  templateUrl: './create-category.component.html',
  styleUrls: ['./create-category.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class CreateCategoryComponent {
 selectedFile: File;
  CorporateTpeDetails: any;
  
  constructor(private adminservice: ServicesService, private http: HttpClient, public dialogRef: MatDialogRef<CreateCategoryComponent>) { }

  handleFileInput(files: FileList) {
    this.selectedFile = files.item(0);
  }

  ngOnInit(): void {

  }

  onSubmit(myForm: any) {
    if (!this.selectedFile) {
      // Handle case where no file is selected
      return;
    }

    const formData = new FormData();

    const myObj = {
      name: myForm.value.name,
      description: myForm.value.description,
    };
    
    // Append the stringified object as "MyObj"
    formData.append('name',myObj.name);
    formData.append('description',myObj.description);
    
    // Append the file
    formData.append('image', this.selectedFile);

    this.adminservice.addCategory(formData).subscribe(
      response => {
        console.log('Success:', response);
        this.dialogRef.close(true);
        this.successNotification(); 
      },
      error => {
        console.error('Error:', error);
        // Handle error, show notification, or take appropriate action
      }
    );
  }

  successNotification() {
    Swal.fire('New Category', 'Created Successfully !', 'success');
  }

  onClose() {
    this.dialogRef.close();
  }
}
