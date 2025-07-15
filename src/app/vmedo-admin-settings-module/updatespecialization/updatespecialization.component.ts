import { Component, OnInit } from '@angular/core';
import { ServicesService } from 'src/app/adminservice/services.service';
import { MatDialogRef } from '@angular/material/dialog';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-updatespecialization',
  templateUrl: './updatespecialization.component.html',
  styleUrls: ['./updatespecialization.component.css']
})

export class UpdatespecializationComponent implements OnInit {
  specializationEditData: any;

  constructor(private adminservice: ServicesService, public dialogRef: MatDialogRef<UpdatespecializationComponent>) { }

  ngOnInit(): void {
    this.specializationEditData = JSON.parse(sessionStorage.getItem('specializationdata'));
  }

  hospitalSpecializationData(data: any) {
    this.adminservice.addSpecializationData(data).subscribe(
      (result: any) => {
        if (result.statusCode === 200) {
          this.successNotification();
          this.onClose();
        }
      },
      (error) => {
        console.error('Error updating hospital specialization data:', error);
        // Handle error, show notification, or take appropriate action
      }
    );
  }

  successNotification() {
    Swal.fire('Specialization', 'Updated successfully!', 'success');
  }

  onClose() {
    this.dialogRef.close();
  }
}
