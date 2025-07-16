import { DatePipe } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { environment } from 'src/environments/environment';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-deactivate-coupon',
  templateUrl: './deactivate-coupon.component.html',
  styleUrls: ['./deactivate-coupon.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class DeactivateCouponComponent implements OnInit {

  deactivatedCouponID: any;
  couponName: any;

  constructor(private http: HttpClient, private datePipe: DatePipe, public dialogRef: MatDialogRef<DeactivateCouponComponent>) { }

  ngOnInit(): void {
    this.deactivatedCouponID = JSON.parse(sessionStorage.getItem('deactivateCouponID'));
    this.couponName = JSON.parse(sessionStorage.getItem('couponName'));
  }

  onConfirmDeactivateCouponCode() {
    const currentTime = new Date();
    const timezone = 'Kolkata';
    const formattedTime = this.datePipe.transform(currentTime, 'yyyy-MM-ddTHH:mm:ss', timezone);

    const requestdata = {
      Astatus: 0,
      id: this.deactivatedCouponID,
      updated_on: formattedTime // add the current date to the data to be sent to the API
    };

    return this.http.post<any>(`${environment.baseUrl}Vadmin/AdminApproveCouponCodeStatus`, requestdata).subscribe((res: any) => {
      this.onClose();
      this.successNotification();
    });
  }

  successNotification() {
    Swal.fire('Coupon code', 'Deactivated Successfully !', 'success');
  }

  onClose() {
    this.dialogRef.close();
  }
}
