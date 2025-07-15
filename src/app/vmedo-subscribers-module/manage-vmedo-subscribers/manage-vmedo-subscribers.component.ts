import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ServicesService } from 'src/app/adminservice/services.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-manage-vmedo-subscribers',
  templateUrl: './manage-vmedo-subscribers.component.html',
  styleUrls: ['./manage-vmedo-subscribers.component.css']
})
export class ManageVmedoSubscribersComponent {

  userRole: any;

  ngOnInit() {
    this.userRole = JSON.parse(sessionStorage.getItem('role'));
  }


  constructor(private http: HttpClient, private adminservice: ServicesService, private dialog: MatDialog,private modalService: NgbModal) {}
  
  onUpdateRenewals() {
    this.adminservice.updateSubscriptionDetailsData().subscribe(
      (result: any) => {
        console.warn(result);

        if (result.statusCode === 200) {
          this.successNotification();
        }
      },
      (error) => {
        console.error('Error updating renewals:', error);
        Swal.fire('Error', 'An error occurred while updating renewals.', 'error');
      }
    );
  }

  successNotification() {
    Swal.fire('VMEDO Subscribers renewal details', 'Fetched successfully!', 'success');
  }


}
