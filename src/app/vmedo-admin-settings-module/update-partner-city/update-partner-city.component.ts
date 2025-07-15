import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { ServicesService } from 'src/app/adminservice/services.service';
import Swal from 'sweetalert2';
import { EditPartnerTypeComponent } from '../edit-partner-type/edit-partner-type.component';

@Component({
  selector: 'app-update-partner-city',
  templateUrl: './update-partner-city.component.html',
  styleUrls: ['./update-partner-city.component.css']
})
export class UpdatePartnerCityComponent implements OnInit {
  
  partnerCityData: any;

  constructor(private adminservice: ServicesService, public dialogRef: MatDialogRef<EditPartnerTypeComponent>) { }

  ngOnInit(): void {
    this.partnerCityData = JSON.parse(sessionStorage.getItem('partnercitydata'));
  }

  updatePartnerCityData(data: any) {
    this.adminservice.editVmedoPartnerCityData(data).subscribe(
      (result: any) => {
        if (result.statusCode === 200) {
          this.successNotification();
          this.onClose();
        }
      },
      (error) => {
        console.error('Error updating partner city data:', error);
        // Handle error, show notification, or take appropriate action
      }
    );
  }

  successNotification() {
    Swal.fire('Partner details', 'Updated successfully!', 'success');
  }

  onClose() {
    this.dialogRef.close();
  }
}
