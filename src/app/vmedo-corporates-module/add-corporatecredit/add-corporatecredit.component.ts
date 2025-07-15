import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { ServicesService } from 'src/app/adminservice/services.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-add-corporatecredit',
  templateUrl: './add-corporatecredit.component.html',
  styleUrls: ['./add-corporatecredit.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class AddCorporatecreditComponent implements OnInit {
  CorporateCreditData: any;
  corporateID: any;

  constructor(private adminservice: ServicesService, public dialogRef: MatDialogRef<AddCorporatecreditComponent>) { }

  ngOnInit(): void {
    this.CorporateCreditData = JSON.parse(sessionStorage.getItem('corporateCreditData'));
    this.corporateID = this.CorporateCreditData;
  }

  addCorporateCreditData(data: any) {
    this.adminservice.AddCorporateCredit(data).subscribe(
      (result: any) => {
        if (result.statusCode === 200) {
          this.onClose();
          this.successNotification();
        }
      },
      (error) => {
        console.error('Error adding corporate credit:', error);
        // Handle error, show notification, or take appropriate action
      }
    );
  }

  successNotification() {
    Swal.fire('Corporate credit', 'Added successfully !', 'success');
  }

  onClose() {
    this.dialogRef.close();
  }
}
