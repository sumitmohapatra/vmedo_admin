import { DatePipe } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { environment } from 'src/environments/environment';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-confirm-activate-package',
  templateUrl: './confirm-activate-package.component.html',
  styleUrls: ['./confirm-activate-package.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class ConfirmActivatePackageComponent implements OnInit {

  activatedID: any;
  packageName: any;

  constructor(private http: HttpClient, private datePipe: DatePipe, public dialogRef: MatDialogRef<ConfirmActivatePackageComponent>) { }

  ngOnInit(): void {
    this.activatedID = JSON.parse(sessionStorage.getItem('activateID'));
    this.packageName = JSON.parse(sessionStorage.getItem('packageName'));
  }

  onConfirmActivatePackage() {
    const currentTime = new Date();
    const timezone = 'Kolkata';
    const formattedTime = this.datePipe.transform(currentTime, 'yyyy-MM-ddTHH:mm:ss', timezone);

    const requestdata = {
      Astatus: 1,
      id: this.activatedID,
      updated_on: formattedTime // add the current date to the data to be sent to the API
    };

    return this.http.post<any>(`${environment.baseUrl}Vadmin/AdminApproveSubscriptionStatus`, requestdata)
      .subscribe((res: any) => {
        this.onClose();
        this.successNotification();
      });
  }

  successNotification() {
    Swal.fire('Subscription package', 'Activated Successfully!', 'success');
  }

  onClose() {
    this.dialogRef.close();
  }
}
