import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ServicesService } from 'src/app/adminservice/services.service';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-useremergencyiddetails',
  templateUrl: './useremergencyiddetails.component.html',
  styleUrls: ['./useremergencyiddetails.component.css'],
  encapsulation: ViewEncapsulation.None 
})
export class UseremergencyiddetailsComponent implements OnInit {

  emergencyidDetails: any;

  constructor(private adminservice: ServicesService, public dialogRef: MatDialogRef<UseremergencyiddetailsComponent>) {}

  ngOnInit(): void {
    this.getEmergencyID();
  }

  getEmergencyID() {
    this.adminservice.getEmergencyID().subscribe(
      (data) => {
        this.emergencyidDetails = data;
      },
      (error) => {
        // Handle the error, log it, or show a user-friendly message
        console.error('Error fetching emergency ID:', error);
      }
    );
  }

  onClose() {
    // You can pass data back to the parent component if needed
    this.dialogRef.close();
  }
}
