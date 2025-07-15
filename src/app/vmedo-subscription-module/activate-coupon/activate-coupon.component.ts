import { DatePipe } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-activate-coupon',
  templateUrl: './activate-coupon.component.html',
  styleUrls: ['./activate-coupon.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class ActivateCouponComponent implements OnInit {

  activatedCouponID: any;
  couponName: any;

  constructor(private http: HttpClient, private datePipe: DatePipe, public dialogRef: MatDialogRef<ActivateCouponComponent>) { }

  ngOnInit(): void {
    this.activatedCouponID = JSON.parse(sessionStorage.getItem('activateCouponID'));
    this.couponName = JSON.parse(sessionStorage.getItem('couponName'));
  }

  onConfirmActivateCouponCode() {
    const currentTime = new Date();
    const timezone = 'Kolkata';
    const formattedTime = this.datePipe.transform(currentTime, 'yyyy-MM-ddTHH:mm:ss', timezone);

    const requestdata = {
      Astatus: 1,
      id: this.activatedCouponID,
      updated_on: formattedTime // add the current date to the data to be sent to the API
    };

    return this.http.post<any>('https://api.vmedo.com/api/Vadmin/AdminApproveCouponCodeStatus', requestdata).subscribe((res: any) => {
      this.onClose();
      this.successNotification();
    });
  }

  successNotification() {
    Swal.fire('Coupon Code', 'Activated Successfully!', 'success');
  }

  onClose() {
    this.dialogRef.close();
  }
}
