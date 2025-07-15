import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { DatePipe } from '@angular/common';
import { MatDialogRef } from '@angular/material/dialog';
import { ServicesService } from 'src/app/adminservice/services.service';
import Swal from 'sweetalert2';

interface Status {
  id: number;
  value: string;
}

@Component({
  selector: 'app-edit-admin-users',
  templateUrl: './edit-admin-users.component.html',
  styleUrls: ['./edit-admin-users.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class EditAdminUsersComponent implements OnInit {

  formattedCurrentTime: any;
  editAdminUsersData: any;
  selectedRole: any;
  adminRoleListData: any;
  selectedUserRole: any;
  currentTime:any;
  currentDateTime:string;

  constructor(private adminservice: ServicesService, private datePipe: DatePipe, public dialogRef: MatDialogRef<EditAdminUsersComponent>) {
    const currentTime = new Date();
    const timezone = 'Kolkata';
    this.formattedCurrentTime = this.datePipe.transform(currentTime, 'yyyy-MM-ddTHH:mm:ss', timezone);

    this.currentTime = this.formattedCurrentTime;

    const now = new Date();
    const year = now.getFullYear();
    const month = now.getMonth() + 1;
    const day = now.getDate();
    const hours = now.getHours();
    const minutes = now.getMinutes();
    this.currentDateTime = `${year}-${month.toString().padStart(2, '0')}-${day.toString().padStart(2, '0')}T${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}`;

  }

  ngOnInit(): void {
    this.editAdminUsersData = JSON.parse(sessionStorage.getItem('adminUserData'));

    this.selectedRole = this.editAdminUsersData.roleType;

    this.adminservice.GetAdminRoleListData().subscribe(
      (data) => {
        this.adminRoleListData = data['objret'];

        this.selectedUserRole = this.adminRoleListData.filter((m) => m.roleID == this.selectedRole).
          map((a) => a.roleID);
        this.selectedUserRole = Number(this.selectedUserRole);

        
      },
      (error) => {
        console.error('Error getting admin role list:', error);
        // Handle error, show notification, or take appropriate action
      }
    );


  }

  adminUserStatus: Status[] = [
    { id: 1, value: 'Activate' },
    { id: 0, value: 'Deactivate' },
  ];

  EditAdminUserData(data: any) {
    this.adminservice.EditAdminUserData(data).subscribe(
      (result: any) => {
        if (result.statusCode === 200) {
          this.successNotification();
          this.onClose();
        }
      },
      (error) => {
        console.error('Error editing admin user:', error);
        // Handle error, show notification, or take appropriate action
      }
    );
  }

  successNotification() {
    Swal.fire('Admin user details', 'Updated successfully!', 'success');
  }

  onClose() {
    this.dialogRef.close();
  }
}
