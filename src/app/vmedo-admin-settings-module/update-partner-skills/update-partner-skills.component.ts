import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { ServicesService } from 'src/app/adminservice/services.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-update-partner-skills',
  templateUrl: './update-partner-skills.component.html',
  styleUrls: ['./update-partner-skills.component.css']
})
export class UpdatePartnerSkillsComponent implements OnInit {

  partnerSkillsData: any;

  constructor(private adminservice: ServicesService, public dialogRef: MatDialogRef<UpdatePartnerSkillsComponent>) { }

  ngOnInit(): void {
    this.partnerSkillsData = JSON.parse(sessionStorage.getItem('partnerskillsdata'));
  }

  updatePartnerSkillsData(data: any) {
    this.adminservice.editVmedoPartnersSkills(data).subscribe(
      (result: any) => {
        if (result.statusCode === 200) {
          this.successNotification();
          this.onClose();
        }
      },
      (error) => {
        console.error('Error updating partner skills data:', error);
        // Handle error, show notification, or take appropriate action
      }
    );
  }

  successNotification() {
    Swal.fire('Partner skills', 'Updated successfully!', 'success');
  }

  onClose() {
    this.dialogRef.close();
  }
}
