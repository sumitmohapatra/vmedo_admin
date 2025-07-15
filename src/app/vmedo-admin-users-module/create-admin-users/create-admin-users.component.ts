import { DatePipe } from '@angular/common';
import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { ServicesService } from 'src/app/adminservice/services.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-create-admin-users',
  templateUrl: './create-admin-users.component.html',
  styleUrls: ['./create-admin-users.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class CreateAdminUsersComponent implements OnInit {

  formattedCurrentTime: any;
  adminRoleList: any;
  currentTime:any;

  constructor(private adminservice: ServicesService, private datePipe: DatePipe, public dialogRef: MatDialogRef<CreateAdminUsersComponent>) {
    const currentTime = new Date();
    const timezone = 'Kolkata';
    this.formattedCurrentTime = this.datePipe.transform(currentTime, 'yyyy-MM-ddTHH:mm:ss', timezone);
  }

  ngOnInit(): void {
    this.adminservice.GetAdminRoleListData().subscribe(
      (data) => {
        this.adminRoleList = data;
      },
      (error) => {
        console.error('Error getting admin role list:', error);
        // Handle error, show notification, or take appropriate action
      }
    );
  }

  adminUserData(data: any) {
    this.adminservice.createAdminRoleData(data).subscribe(
      (result: any) => {
        if (result.statusCode === 200) {
          this.successNotification();
          this.onClose();
        }
      },
      (error) => {
        console.error('Error creating admin user:', error);
        // Handle error, show notification, or take appropriate action
      }
    );
  }

  successNotification() {
    Swal.fire('User role', 'Created Successfully!', 'success');
  }

  onClose() {
    this.dialogRef.close();
  }
}
