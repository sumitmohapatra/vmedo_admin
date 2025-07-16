import { DatePipe } from '@angular/common';
import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { ServicesService } from 'src/app/adminservice/services.service';
import Swal from 'sweetalert2';
import { Editor, Toolbar } from 'ngx-editor';

@Component({
  selector: 'app-edit-subscription-package',
  templateUrl: './edit-subscription-package.component.html',
  styleUrls: ['./edit-subscription-package.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class EditSubscriptionPackageComponent implements OnInit {

  currentTime: any;
  editSubscriptionData: any;
  editor: Editor;
  toolbar: Toolbar = [
      ['bold', 'italic'],
      ['ordered_list', 'bullet_list'], 
      ['underline', 'strike'],
      ['text_color', 'background_color'],
      ['align_left', 'align_center', 'align_right', 'align_justify'],
    ];

  constructor(private adminservice: ServicesService, private datePipe: DatePipe, public dialogRef: MatDialogRef<EditSubscriptionPackageComponent>) {
    const currentTime = new Date();
    const timezone = 'Kolkata';
    const formattedTime = this.datePipe.transform(currentTime, 'yyyy-MM-ddTHH:mm:ss', timezone);

    this.currentTime = formattedTime;
  }

  ngOnInit(): void {
    this.editSubscriptionData = JSON.parse(sessionStorage.getItem('packageData'));
    this.editor = new Editor();
  }

  ngOnDestroy(): void {
    this.editor.destroy();
  }
  editPackageSubscriptionData(data: any) {
    this.adminservice.editSubscriptionPackageData(data).subscribe((result: any) => {
      if (result.statusCode === 200) {
        this.onClose();
        this.successNotification();
      }
    });
  }

  successNotification() {
    Swal.fire('Subscription package', 'Updated successfully !', 'success');
  }

  onClose() {
    this.dialogRef.close();
  }
}
