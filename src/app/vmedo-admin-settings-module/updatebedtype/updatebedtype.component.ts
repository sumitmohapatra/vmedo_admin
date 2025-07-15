import { Component, OnInit } from '@angular/core';
import { ServicesService } from 'src/app/adminservice/services.service';
import { MatDialogRef } from '@angular/material/dialog';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-updatebedtype',
  templateUrl: './updatebedtype.component.html',
  styleUrls: ['./updatebedtype.component.css']
})
export class UpdatebedtypeComponent implements OnInit {

  bedTypeEditData: any;

  constructor(private adminservice: ServicesService, public dialogRef: MatDialogRef<UpdatebedtypeComponent>) { }

  ngOnInit(): void {
    this.bedTypeEditData = JSON.parse(sessionStorage.getItem('bedtypedata'));
  }

  hospitalBedTypeData(data: any) {
    this.adminservice.addBedTypeData(data).subscribe(
      (result: any) => {
        if (result.statusCode === 200) {
          this.successNotification();
          this.onClose();
        }
      },
      (error) => {
        console.error('Error updating hospital bed type data:', error);
        // Handle error, show notification, or take appropriate action
      }
    );
  }

  successNotification() {
    Swal.fire('Bed type', 'Updated successfully!', 'success');
  }

  onClose() {
    this.dialogRef.close();
  }
}
