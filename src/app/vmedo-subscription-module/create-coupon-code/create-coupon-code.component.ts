import { DatePipe } from '@angular/common';
import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { ServicesService } from 'src/app/adminservice/services.service';
import Swal from 'sweetalert2';

interface DiscountType {
  id: number;
  value: string;
}

@Component({
  selector: 'app-create-coupon-code',
  templateUrl: './create-coupon-code.component.html',
  styleUrls: ['./create-coupon-code.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class CreateCouponCodeComponent implements OnInit {

  currentTime: any;
  currentDateTime: string;

  constructor(private adminservice: ServicesService, private datePipe: DatePipe, public dialogRef: MatDialogRef<CreateCouponCodeComponent>) {
    const currentTime = new Date();
    const timezone = 'Kolkata';
    const formattedTime = this.datePipe.transform(currentTime, 'yyyy-MM-ddTHH:mm:ss', timezone);

    this.currentTime = formattedTime;

    const now = new Date();
    const year = now.getFullYear();
    const month = now.getMonth() + 1;
    const day = now.getDate();
    const hours = now.getHours();
    const minutes = now.getMinutes();
    this.currentDateTime = `${year}-${month.toString().padStart(2, '0')}-${day.toString().padStart(2, '0')}T${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}`;
  }

  ngOnInit(): void {
  }

  discountType: DiscountType[] = [
    { id: 1, value: 'Flat Discount' },
    { id: 2, value: 'Percentage' },
  ];

  createCouponData(data: any) {
    this.adminservice.createCouponCodeData(data).subscribe((result: any) => {
      if (result.statusCode === 200) {
        this.onClose();
        this.successNotification();
      }
    });
  }

  successNotification() {
    Swal.fire('Coupon Code', 'Created Successfully !', 'success');
  }

  onClose() {
    this.dialogRef.close();
  }
}
