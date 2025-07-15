import { DatePipe } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-confirm-deactivate-package',
  templateUrl: './confirm-deactivate-package.component.html',
  styleUrls: ['./confirm-deactivate-package.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class ConfirmDeactivatePackageComponent implements OnInit {

  deactivatedID: any;
  packageName: any;

  constructor(private http: HttpClient, private datePipe: DatePipe, public dialogRef: MatDialogRef<ConfirmDeactivatePackageComponent>) { }

  ngOnInit(): void {
    this.deactivatedID = JSON.parse(sessionStorage.getItem('deactivateID'));
    this.packageName = JSON.parse(sessionStorage.getItem('packageName'));
  }

  onConfirmDeactivatePackage() {
    const currentTime = new Date();
    const timezone = 'Kolkata';
    const formattedTime = this.datePipe.transform(currentTime, 'yyyy-MM-ddTHH:mm:ss', timezone);

    const requestdata = {
      Astatus: 0,
      id: this.deactivatedID,
      updated_on: formattedTime // add the current date to the data to be sent to the API
    };

    return this.http.post<any>('https://api.vmedo.com/api/Vadmin/AdminApproveSubscriptionStatus', requestdata)
      .subscribe((res: any) => {
        this.onClose();
        this.successNotification();
      });
  }

  successNotification() {
    Swal.fire('Subscription package', 'Deactivated Successfully!', 'success');
  }

  onClose() {
    this.dialogRef.close();
  }
}
