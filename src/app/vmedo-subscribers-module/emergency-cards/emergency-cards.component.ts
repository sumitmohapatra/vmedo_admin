import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { HttpClient } from '@angular/common/http';
import { ServicesService } from 'src/app/adminservice/services.service';
import { MatSort } from '@angular/material/sort';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import Swal from 'sweetalert2';
import { MatTableDataSource } from '@angular/material/table';
import { CardDetails } from './CardDetails';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { MatDialogRef } from '@angular/material/dialog';
import { BreakpointObserver } from '@angular/cdk/layout';
import { Router } from '@angular/router';
import { CreateduserdetailsComponent } from '../createduserdetails/createduserdetails.component';
import { ngxCsv } from 'ngx-csv/ngx-csv';
import { interval } from 'rxjs';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-emergency-cards',
  templateUrl: './emergency-cards.component.html',
  styleUrls: ['./emergency-cards.component.css']
})
export class EmergencyCardsComponent implements OnInit {
  subscription: any = null;
  id: any;
  searchValue: any;
  searchMobileValue: any;
  userRole: any;

  dataSource: MatTableDataSource<CardDetails>;

  displayedColumns = ['id', 'pname', 'emobile',
    'eaddress', 'isPaidMember', 'package_name', 'package_validity', 'is_active', 'org_name',
    'createdBy', 'download'];

  displayedColumns2 = ['id', 'createdon', 'emid', 'pname', 'emobile',
    'eaddress', 'isPaidMember', 'package_name', 'package_validity', 'org_name', 'is_active'];

  // Pagination variables
  totalUsers = 0;
  pageSize = 15;
  currentPage = 0;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(
    private http: HttpClient,
    private adminservice: ServicesService,
    private route: Router,
    private dialog: MatDialog,
    private modalService: NgbModal
  ) { }

  ngOnInit() {
    this.userRole = JSON.parse(sessionStorage.getItem('role'));
    this.dataSource = new MatTableDataSource<CardDetails>();
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
    Swal.fire({
      title: 'Confirmation',
      text: 'Are you sure you want to clear the records?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, clear it!'
    }).then((result) => {
      if (result.isConfirmed) {
        this.clearSearchValues();
        this.fetchUsers(0);
      }
    });
  }

  clear() {
    Swal.fire({
      title: 'Confirmation',
      text: 'Are you sure you want to clear the records?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, clear it!'
    }).then((result) => {
      if (result.isConfirmed) {
        this.clearSearchValues();
        this.dataSource.data = [];
        this.totalUsers = 0;
        this.currentPage = 0;
      }
    });
  }

  search() {
    const isCardSearch = this.searchValue.length < 10;
    const apiUrl = isCardSearch
      ? `${environment.baseUrl}vadmin/SearchALLEmergencyIDPagination?Svalue=${this.searchValue}&column=id&CaseSensitive=true`
      : `${environment.baseUrl}vadmin/SearchALLEmergencyIDByMobile?mobile=${this.searchValue}`;

    this.http.get<any>(apiUrl).subscribe(response => {
      if (response.statusCode === 404) {
        Swal.fire('Oops!', 'No records found', 'warning');
      } else {
        this.handleSearchResponse(response);
      }
    });
  }

  fetchUsers(pageNumber: number) {
    let apiUrl = `${environment.baseUrl}vadmin/FetchALLEmergencyIDPagination?PNO=${pageNumber + 1}`;

    if (this.searchValue) {
      apiUrl = `${environment.baseUrl}vadmin/SearchALLEmergencyIDPagination?Svalue=${this.searchValue}`;
    }

    if (this.searchMobileValue) {
      apiUrl = `${environment.baseUrl}vadmin/SearchALLEmergencyIDByMobile?mobile=${this.searchMobileValue}`;
    }

    this.http.get<any>(apiUrl).subscribe(response => {
      this.handleSearchResponse(response);
      this.totalUsers = response.objret?.length;
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

  handleSearchResponse(response: any) {
    const searchResult = response.objret as CardDetails[];
    this.dataSource.data = searchResult;
    this.totalUsers = searchResult?.length;
    this.currentPage = 0; // Reset to the first page
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

  pageChanged(pageEvent: PageEvent) {
    this.fetchUsers(pageEvent.pageIndex);
  }

  public doFilter = (value: string) => {
    this.dataSource.filter = value.trim().toLocaleLowerCase();
  }

  eIDAccessed(emergencyID: any) {
    sessionStorage.setItem("emergencyID", JSON.stringify(emergencyID));
    this.route.navigate(["/admindashboard/emergencyidaccessed"]);
  }

  onUserDetails(createdUserID: any) {
    sessionStorage.setItem("createdUserID", JSON.stringify(createdUserID));
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = false;
    dialogConfig.width = "55%";
    dialogConfig.height = "auto";
    this.dialog.open(CreateduserdetailsComponent, dialogConfig);
  }

  downloadEmid(userData: any) {
    var items = [];
    for (var i = 0; i < userData.length; i++) {
      items.push(userData[i]);
    }

    window.sessionStorage.setItem("userData", JSON.stringify(items));

    window.open("/admin-dashboard/vmedo-subscribers-module/downloademid", "_blank");
  }

  fileDownload() {
    var options = {
      fieldSeparator: ',',
      quoteStrings: '"',
      decimalseparator: '.',
      showLabels: true,
      showTitle: true,
      title: 'Exported Data',
      useBom: true,
    };

    new ngxCsv(this.dataSource.data, "Exported Data", options);
  }

  private clearSearchValues() {
    this.searchValue = '';
    this.searchMobileValue = '';
  }
}
