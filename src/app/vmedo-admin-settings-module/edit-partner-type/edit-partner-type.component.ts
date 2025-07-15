import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { ServicesService } from 'src/app/adminservice/services.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-edit-partner-type',
  templateUrl: './edit-partner-type.component.html',
  styleUrls: ['./edit-partner-type.component.css']
})
export class EditPartnerTypeComponent implements OnInit {

  partnerTypeData: any;

  constructor(private adminservice: ServicesService,public dialogRef:MatDialogRef<EditPartnerTypeComponent>) { }
  

  ngOnInit(): void {
    this.partnerTypeData = JSON.parse(sessionStorage.getItem('partnertypedata'));
  }

  updatePartnerTypeData(data: any) {

    this.adminservice.createPartnerTypeData(data).subscribe((result: any) => {
     
      if (result.statusCode === 200) {
        this.successNotification();
        this.onClose();
        }
    }
    )

  }


  successNotification() {
    Swal.fire('Partner details', 'Updated successfully !', 'success');
  }

  onClose(){
   
    this.dialogRef.close();
 
  
  }
}
