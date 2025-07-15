import { Component, OnInit, ViewChild } from '@angular/core';
import { ServicesService } from 'src/app/adminservice/services.service';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { BlooddonordetailsComponent } from '../../adminmodule/blooddonordetails/blooddonordetails.component';
import { interval } from 'rxjs';
import { packageDetails } from './packageDetails';

import { ConfirmActivatePackageComponent } from '../confirm-activate-package/confirm-activate-package.component';
import { ConfirmDeactivatePackageComponent } from '../confirm-deactivate-package/confirm-deactivate-package.component';
import { EditSubscriptionPackageComponent } from '../edit-subscription-package/edit-subscription-package.component';
import { AddPackageSubscriptionComponent } from '../add-package-subscription/add-package-subscription.component';

@Component({
  selector: 'app-manage-package-subscription',
  templateUrl: './manage-package-subscription.component.html',
  styleUrls: ['./manage-package-subscription.component.css']
})
export class ManagePackageSubscriptionComponent implements OnInit {

  counter = interval(15000); // sets time interval
  subscription: any = null;
  intervalid: any;

  displayedColumns: String[] = ['id', 'packageName', 'packageEmergencycard', 'packageAmount', 'packageDiscount', 'packageValidity', 'packageDescription', 'packageStatus', 'actions'];

  public dataSource = new MatTableDataSource<packageDetails>();

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  reviewData: any;

  packagelist: any;
  allPackageData: any;

  constructor(private adminservice: ServicesService, private dialog: MatDialog) {
    this.getPackageData();
    this.intervalid = setInterval(() => {
      this.getPackageData();
    }, 15000);
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  getPackageData() {
    this.adminservice.GetAllSubscriptionPackagesData().subscribe(x => {
      this.dataSource.data = x['objret'] as packageDetails[];
    });
  }

  ngOnInit(): void {}

  ngOnDestroy() {
    if (this.intervalid) {
      clearInterval(this.intervalid);
    }
  }

  public doFilter = (value: string) => {
    this.dataSource.filter = value.trim().toLocaleLowerCase();
  }

  onCreatePackage() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = "35%";

    this.dialog.open(AddPackageSubscriptionComponent, dialogConfig);

    this.dialog.afterAllClosed.subscribe;
  }

  onActivatePackage(activateID, packageName) {
    sessionStorage.setItem("activateID", JSON.stringify(activateID));
    sessionStorage.setItem("packageName", JSON.stringify(packageName));
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = "45%";

    this.dialog.open(ConfirmActivatePackageComponent, dialogConfig);

    this.dialog.afterAllClosed.subscribe;
  }

  onDeactivatePackage(deactivateID, packageName) {
    sessionStorage.setItem("deactivateID", JSON.stringify(deactivateID));
    sessionStorage.setItem("packageName", JSON.stringify(packageName));
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = "45%";

    this.dialog.open(ConfirmDeactivatePackageComponent, dialogConfig);

    this.dialog.afterAllClosed.subscribe;
  }

  onEditPackage(packagedata: any) {
    sessionStorage.setItem("packageData", JSON.stringify(packagedata));
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = "35%";
    this.dialog.open(EditSubscriptionPackageComponent, dialogConfig);
  }

}
