import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { interval } from 'rxjs';
import { paidSubscribersDetails } from './paidSubscribersDetails';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { ServicesService } from 'src/app/adminservice/services.service';
import { MatDialog } from '@angular/material/dialog';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-paid-subscribers',
  templateUrl: './paid-subscribers.component.html',
  styleUrls: ['./paid-subscribers.component.css']
})
export class PaidSubscribersComponent implements OnInit {
  counter = interval(15000); // sets time interval
  subscription: any = null;
  intervalId: any;
  userRole: any;

  displayedColumns: string[] = ['userName', 'userMobile', 'couponCode', 'packageName', 'packageAmount', 'created_on', 'valid_till'];

  public dataSource = new MatTableDataSource<paidSubscribersDetails>();

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(private adminservice: ServicesService, private dialog: MatDialog) {
    this.getPaidUsersData();
    this.intervalId = setInterval(() => {
      this.getPaidUsersData();
    }, 15000);
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  ngOnInit() {
    this.userRole = JSON.parse(sessionStorage.getItem('role'));
  }

  ngOnDestroy() {
    if (this.intervalId) {
      clearInterval(this.intervalId);
    }
  }

  getPaidUsersData() {
    this.adminservice.GetPaidUsersData().subscribe(
      (data) => {
        this.dataSource.data = data['objret'] as paidSubscribersDetails[];
      },
      (error) => {
        // Handle errors or log them for debugging
      }
    );
  }

  public doFilter = (value: string) => {
    this.dataSource.filter = value.trim().toLocaleLowerCase();
  }

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
    Swal.fire('VMEDO Subscribers renewal details', 'Updated successfully!', 'success');
  }

}
