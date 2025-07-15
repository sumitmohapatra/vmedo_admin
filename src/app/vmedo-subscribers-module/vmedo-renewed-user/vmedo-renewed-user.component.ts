import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { HttpClient } from '@angular/common/http';
import { notRenewedUserData} from './notRenewedUserData'
import { ServicesService } from 'src/app/adminservice/services.service';
import { MatSort } from '@angular/material/sort';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { EmergencyidComponent } from '../emergencyid/emergencyid.component';
import { UseremergencyiddetailsComponent } from '../useremergencyiddetails/useremergencyiddetails.component';
import { BlooddonordetailsComponent } from '../../adminmodule/blooddonordetails/blooddonordetails.component';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-vmedo-renewed-user',
  templateUrl: './vmedo-renewed-user.component.html',
  styleUrls: ['./vmedo-renewed-user.component.css']
})
export class VmedoRenewedUserComponent implements OnInit {
  emergencyIdDetails: any;
  emergencyidNumber: any;
  emergencyidNumbers: any;
  id: any;
  packagename: any;
  searchValue: any;
  userRole: any;

  dataSource: MatTableDataSource<notRenewedUserData>;
  displayedColumns: string[] = ['profilePhoto', 'registered_on', 'uName', 'uMobile', 'uEmail', 'mobileVerified', 'emailVerified', 'isDoner', 'hasEID', 'isPaidMember'];

  // Pagination variables
  totalUsers = 0;
  pageSize = 15;
  currentPage = 0;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(private http: HttpClient, private adminservice: ServicesService, private dialog: MatDialog,private modalService: NgbModal) {}

  ngOnInit() {
    this.userRole = JSON.parse(sessionStorage.getItem('role'));
    this.dataSource = new MatTableDataSource<notRenewedUserData>();
    this.dataSource.paginator = this.paginator;
    if (this.userRole !== 2) {
      this.fetchUsers(0);
    }
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  ngOnDestroy() {
    if (this.id) {
      clearInterval(this.id);
    }
  }

  adminClear() {
    this.showConfirmationDialog('Confirmation', 'Are you sure you want to clear the records?', () => {
      this.searchValue = '';
      this.fetchUsers(0);
    });
  }

  clear() {
    this.showConfirmationDialog('Confirmation', 'Are you sure you want to clear the records?', () => {
      this.searchValue = '';
      this.dataSource.data = [];
      this.totalUsers = 0;
      this.currentPage = 0;
    });
  }

  search() {
    const apiUrl = `https://api.vmedo.com/api/vadmin/SearchAdminUserRegisteredListPage?Svalue=${this.searchValue}`;

    this.http.get<any>(apiUrl).subscribe(
      (response) => {
        if (response.statusCode === 400 && response.message === 'No Data Found') {
          Swal.fire('Oops!', 'No records found', 'warning');
        } else {
          const searchResult = response.objret as notRenewedUserData[];
          this.dataSource.data = searchResult;
          this.totalUsers = searchResult.length;
          this.currentPage = 0;
        }
      },
      (error) => {
        console.error('Error fetching data:', error);
        Swal.fire('Error', 'An error occurred while searching.', 'error');
      }
    );
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
    Swal.fire('VMEDO Subscribers renewal details', 'Fetched successfully!', 'success');
  }

  fetchUsers(pageNumber: number) {
    let apiUrl = `https://api.vmedo.com/api/vadmin/AdminSubscribedRegisteredListPage?PNO=${pageNumber + 1}`

    if (this.searchValue) {
      apiUrl = `https://api.vmedo.com/api/vadmin/SearchAdminUserRegisteredListPage?Svalue=${this.searchValue}`;
    }

    this.http.get<any>(apiUrl).subscribe((response) => {
      this.dataSource.data = response.objret as notRenewedUserData[];
      this.totalUsers = response.objret.length;
      this.currentPage = pageNumber;

      if (this.paginator) {
        this.paginator.length = this.totalUsers;
        this.paginator.pageIndex = this.currentPage;
      }

      // Update the paginator's length and page index
      // this.paginator.length = this.totalUsers;
      // this.paginator.pageIndex = this.currentPage;
    });
  }

  handlePage(event: PageEvent) {
    const pageNumber = event.pageIndex;
    this.fetchUsers(pageNumber);
  }

  handleNextClick() {
    this.fetchUsers(this.currentPage + 1);
  }

  handlePreviousClick() {
    if (this.currentPage > 0) {
      this.fetchUsers(this.currentPage - 1);
    }
  }

  navigateToPage(pageIndex: number) {
    if (pageIndex >= 0 && pageIndex < this.paginator.getNumberOfPages()) {
      this.paginator.pageIndex = pageIndex;
      this.fetchUsers(pageIndex);
    }
  }

  goForward() {
    this.navigateToPage(this.currentPage + 1);
  }

  goBackward() {
    this.navigateToPage(this.currentPage - 1);
  }

  pageChanged(pageEvent: PageEvent) {
    this.fetchUsers(pageEvent.pageIndex);
  }

  public doFilter = (value: string) => {
    this.dataSource.filter = value.trim().toLocaleLowerCase();
  }

  emergencyID(emergencyUserID: any) {
    sessionStorage.setItem('emergencyUserID', JSON.stringify(emergencyUserID));

    this.adminservice.getEmergencyID().subscribe((data) => {
      this.emergencyIdDetails = data['objret'];
    });
  }

  onEmergencyID(emergencyUserID: any) {
    sessionStorage.setItem('emergencyUserID', JSON.stringify(emergencyUserID));
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = false;
    dialogConfig.width = '55%';
    dialogConfig.height = 'auto';
    this.dialog.open(UseremergencyiddetailsComponent, dialogConfig);
  }

  onBloodDonation(registeredBloodDonorID: any) {
    sessionStorage.setItem('bloodDonorID', JSON.stringify(registeredBloodDonorID));
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = false;
    dialogConfig.width = '55%';
    dialogConfig.height = 'auto';
    this.dialog.open(BlooddonordetailsComponent, dialogConfig);
  }

  private showConfirmationDialog(title: string, text: string, callback: () => void) {
    Swal.fire({
      title: title,
      text: text,
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, clear it!'
    }).then((result) => {
      if (result.isConfirmed) {
        callback();
      }
    });
  }
}
