import { Component, OnInit, ViewChild, OnDestroy } from '@angular/core';
import { ServicesService } from 'src/app/adminservice/services.service';
import { MatDialogRef } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { emergencyidlist } from './emergencyidslist';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { BreakpointObserver } from '@angular/cdk/layout';
import { Router } from '@angular/router';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { CreateduserdetailsComponent } from '../createduserdetails/createduserdetails.component';
import { ngxCsv } from 'ngx-csv/ngx-csv';
import { interval, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-emergencyid',
  templateUrl: './emergencyid.component.html',
  styleUrls: ['./emergencyid.component.css'],
})
export class EmergencyidComponent implements OnInit, OnDestroy {
  private ngUnsubscribe = new Subject();

  counter = interval(15000); // sets time interval
  id: any;

  displayedColumns = ['id', 'profilepic', 'createdon', 'emid', 'pname', 'emobile',
    'eaddress', 'epostalcode', 'isPaidMember', 'package_name', 'package_validity', 'download', 'createdBy', 'actions'];

  public dataSource = new MatTableDataSource<emergencyidlist>();

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(
    private adminservice: ServicesService,
    private route: Router,
    private dialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.getEmergencyIdData();
    this.id = interval(20000).pipe(takeUntil(this.ngUnsubscribe)).subscribe(() => this.getEmergencyIdData());
  }

  ngOnDestroy() {
    this.ngUnsubscribe.next();
    this.ngUnsubscribe.complete();
    if (this.id) {
      this.id.unsubscribe();
    }
  }

  getEmergencyIdData() {
    this.adminservice.getallemergencyID().pipe(takeUntil(this.ngUnsubscribe)).subscribe((x) => {
      this.dataSource.data = x['objret'] as emergencyidlist[];
    });
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
    const items = [...userData];
    window.sessionStorage.setItem("userData", JSON.stringify(items));
    this.route.navigate(["/admindashboard/downloademid"]);
  }

  fileDownload() {
    const options = {
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
}
