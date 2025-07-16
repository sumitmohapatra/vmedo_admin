import { HttpClient } from '@angular/common/http';
import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { ServicesService } from 'src/app/adminservice/services.service';
import { environment } from 'src/environments/environment';
import Swal from 'sweetalert2';

interface Status {
  id: string;
  value: string;
}

@Component({
  selector: 'app-update-corporate',
  templateUrl: './update-corporate.component.html',
  styleUrls: ['./update-corporate.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class UpdateCorporateComponent implements OnInit {

  selectedFile: File;
  CorporatesData:any;
  selectedRole: any;
  CorporateTypeData: any;
  adminRoleListData: any;
  selectedUserRole: any;
  planActiveStatus: any;

  constructor(private adminservice: ServicesService,private http: HttpClient, private dialog: MatDialog, 
    public dialogRef:MatDialogRef<UpdateCorporateComponent>) { }

    handleFileInput(files: FileList) {
      this.selectedFile = files.item(0);
    }
  

  ngOnInit(): void {
    this.CorporatesData = JSON.parse(sessionStorage.getItem('corporateData'));

    this.selectedRole = this.CorporatesData.organisationType;

    this.adminservice.GetCorporateTypeData().subscribe(data => {
      this.adminRoleListData = data['objorg'];
     

      this.selectedUserRole= this.adminRoleListData.filter(m => m.id == this.selectedRole).
        map(a=>a.id);
        this.selectedUserRole = Number(this.selectedUserRole);
        
    })

  }

  corporateStatus: Status[] = [
    { id: 'true', value: 'Activate' },
    { id: 'false', value: 'Deactivate' },
  ];

 

  onSubmit(myForm: any) {
    const myObj = {
      organisationID:myForm.value.organisationID,
      organisationName: myForm.value.organisationName,
      organisationEmail: myForm.value.organisationEmail,
      organisationShortcode: myForm.value.organisationShortcode,
      organisationType: myForm.value.organisationType,
      organisationStatus:myForm.value.organisationStatus,
      file: this.selectedFile
    };

    const formData = new FormData();
    formData.append('myObj', JSON.stringify(myObj));
    formData.append('file', this.selectedFile);

    console.log(myObj);

    this.http.post(`${environment.baseUrl}vadmin/Updateorganisation_details`, formData).subscribe(
      response => {

        this.onClose();
        this.successNotification(); 
        console.log('Success:', response);
      },
      error => {
        console.error('Error:', error);
      }
    );
  }

  successNotification() {
    Swal.fire('Corporate details', 'Updated successfully !', 'success');
  }

  onClose(){
   
    this.dialogRef.close();

  }

}
