import { Component, OnInit } from '@angular/core';
import { ServicesService } from 'src/app/adminservice/services.service';
import { MatDialogRef } from '@angular/material/dialog';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-updateemergencyhandle',
  templateUrl: './updateemergencyhandle.component.html',
  styleUrls: ['./updateemergencyhandle.component.css']
})
export class UpdateemergencyhandleComponent implements OnInit {

  emergencyHandleEditData: any;

  constructor(private adminservice: ServicesService, public dialogRef: MatDialogRef<UpdateemergencyhandleComponent>) { }

  ngOnInit(): void {
    this.emergencyHandleEditData = JSON.parse(sessionStorage.getItem('emergencyhandeldata'));
  }

  hospitalEmergencyHandleData(data: any) {
    this.adminservice.addEmergencyHandledData(data).subscribe(
      (result: any) => {
        if (result.statusCode === 200) {
          this.successNotification();
          this.onClose();
        }
      },
      (error) => {
        console.error('Error updating hospital emergency handle data:', error);
        // Handle error, show notification, or take appropriate action
      }
    );
  }

  successNotification() {
    Swal.fire('Emergency handle', 'Updated successfully!', 'success');
  }

  onClose() {
    this.dialogRef.close();
  }
}
