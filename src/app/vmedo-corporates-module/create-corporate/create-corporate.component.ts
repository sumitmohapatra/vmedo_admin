import { HttpClient } from '@angular/common/http';
import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { ServicesService } from 'src/app/adminservice/services.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-create-corporate',
  templateUrl: './create-corporate.component.html',
  styleUrls: ['./create-corporate.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class CreateCorporateComponent implements OnInit {

  selectedFile: File;
  CorporateTpeDetails: any;
  
  constructor(private adminservice: ServicesService, private http: HttpClient, public dialogRef: MatDialogRef<CreateCorporateComponent>) { }

  handleFileInput(files: FileList) {
    this.selectedFile = files.item(0);
  }

  ngOnInit(): void {
    this.adminservice.GetCorporateTypeData().subscribe(data => {
      this.CorporateTpeDetails = data;
    });
  }

  onSubmit(myForm: any) {
    if (!this.selectedFile) {
      // Handle case where no file is selected
      return;
    }

    const formData = new FormData();
    formData.append('organisationName', myForm.value.organisationName);
    formData.append('organisationEmail', myForm.value.organisationEmail);
    formData.append('organisationShortcode', myForm.value.organisationShortcode);
    formData.append('organisationType', myForm.value.organisationType);
    formData.append('file', this.selectedFile);

    this.http.post('https://api.vmedo.com/api/vadmin/Addorganisation_details', formData).subscribe(
      response => {
        console.log('Success:', response);
        this.onClose();
        this.successNotification(); 
      },
      error => {
        console.error('Error:', error);
        // Handle error, show notification, or take appropriate action
      }
    );
  }

  successNotification() {
    Swal.fire('New Corporate', 'Created Successfully !', 'success');
  }

  onClose() {
    this.dialogRef.close();
  }
}
