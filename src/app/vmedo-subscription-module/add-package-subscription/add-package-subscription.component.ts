import { DatePipe } from '@angular/common';
import { Component, OnDestroy, OnInit, ViewEncapsulation } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { ServicesService } from 'src/app/adminservice/services.service';
import Swal from 'sweetalert2';
import { Editor } from 'ngx-editor';

@Component({
  selector: 'app-add-package-subscription',
  templateUrl: './add-package-subscription.component.html',
  styleUrls: ['./add-package-subscription.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class AddPackageSubscriptionComponent implements OnInit,OnDestroy {

  currentTime: any;
  editor: Editor;
  html = '';

  constructor(private adminservice: ServicesService, private datePipe: DatePipe, public dialogRef: MatDialogRef<AddPackageSubscriptionComponent>) {
    const currentTime = new Date();
    const timezone = 'Kolkata';
    const formattedTime = this.datePipe.transform(currentTime, 'yyyy-MM-ddTHH:mm:ss', timezone);
    this.currentTime = formattedTime;
  }

  ngOnInit(): void {
    this.editor = new Editor();
  }
  ngOnDestroy(): void {
    this.editor.destroy();
  }
  packageSubscriptionData(data: any) {
    this.adminservice.createSubscriptionPackageData(data).subscribe((result: any) => {
      if (result.statusCode === 200) {
        this.onClose();
        this.successNotification();
      }
    });
  }

  successNotification() {
    Swal.fire('Subscription package', 'Created Successfully!', 'success');
  }

  onClose() {
    this.dialogRef.close();
  }
}
