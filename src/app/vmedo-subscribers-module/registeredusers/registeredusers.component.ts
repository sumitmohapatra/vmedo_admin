import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { ServicesService } from 'src/app/adminservice/services.service';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ngxCsv } from 'ngx-csv';
import { UseremergencyiddetailsComponent } from '../useremergencyiddetails/useremergencyiddetails.component';
import { BlooddonordetailsComponent } from 'src/app/adminmodule/blooddonordetails/blooddonordetails.component';
import { UserProperties } from './usersRegisteredList';

@Component({
  selector: 'app-registeredusers',
  templateUrl: './registeredusers.component.html',
  styleUrls: ['./registeredusers.component.css']
})
export class RegisteredusersComponent implements OnInit {

  element: any = {};
  displayedColumns: String[] = ['profilePhoto','registered_on', 'uName', 'uMobile', 'uEmail', 'mobileVerified', 'emailVerified', 'isDoner', 'hasEID','isPaidMember'];
  public dataSource = new MatTableDataSource<UserProperties>();
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  id: any;
  userRole: any;

  constructor(private adminservice: ServicesService, private dialog: MatDialog,private modalService: NgbModal) {
    this.getRegisteredUsers();
  }

  ngOnInit(): void {
    this.userRole = JSON.parse(sessionStorage.getItem('role'));
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

  getRegisteredUsers() {
    this.adminservice.usersRegisteredList().subscribe(data => {
      this.dataSource.data = data['objret'] as UserProperties[];
    });
  }

  public doFilter = (value: string) => {
    this.dataSource.filter = value.trim().toLocaleLowerCase();
  }

  onEmergencyID(emergencyUserID: any) {
    sessionStorage.setItem("emergencyUserID", JSON.stringify(emergencyUserID));
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = false;
    dialogConfig.width = "55%";
    dialogConfig.height = "90%";
    this.dialog.open(UseremergencyiddetailsComponent, dialogConfig);
  }

  onBloodDonation(registeredBloodDonorID: any) {
    sessionStorage.setItem("bloodDonorID", JSON.stringify(registeredBloodDonorID));
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = false;
    dialogConfig.width = "55%";
    dialogConfig.height = "auto";
    this.dialog.open(BlooddonordetailsComponent, dialogConfig);
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
}
