import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { interval } from 'rxjs';
import { ServicesService } from 'src/app/adminservice/services.service';
import { ActivateCouponComponent } from '../activate-coupon/activate-coupon.component';
import { CreateCouponCodeComponent } from '../create-coupon-code/create-coupon-code.component';
import { DeactivateCouponComponent } from '../deactivate-coupon/deactivate-coupon.component';
import { couponDetails } from './couponDetails';
import { Router } from '@angular/router';

@Component({
  selector: 'app-manage-coupon',
  templateUrl: './manage-coupon.component.html',
  styleUrls: ['./manage-coupon.component.css']
})
export class ManageCouponComponent implements OnInit {

  counter = interval(15000); // sets time interval
  subscription: any = null;
  intervalid: any;

  displayedColumns: String[] = ['id', 'couponName', 'discountType', 'totalCoupon', 'couponDiscount', 'couponValidty', 'couponStatus', 'actions'];

  public dataSource = new MatTableDataSource<couponDetails>();

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  reviewData: any;

  packagelist: any;
  allPackageData: any;

  constructor(private adminservice: ServicesService, private dialog: MatDialog, private route: Router) {
    this.getCouponData();
    this.intervalid = setInterval(() => {
      this.getCouponData();
    }, 15000);
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  ngOnInit(): void {
  }

  getCouponData() {
    this.adminservice.GetAllCouponCodesData().subscribe(x => {
      this.dataSource.data = x['objret'] as couponDetails[];
    });
  }

  ngOnDestroy() {
    if (this.intervalid) {
      clearInterval(this.intervalid);
    }
  }

  public doFilter = (value: string) => {
    this.dataSource.filter = value.trim().toLocaleLowerCase();
  }

  onCreateCoupon() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = "35%";

    this.dialog.open(CreateCouponCodeComponent, dialogConfig);

    this.dialog.afterAllClosed.subscribe;
  }

  onActivateCoupon(activateCouponID, couponName) {
    sessionStorage.setItem("activateCouponID", JSON.stringify(activateCouponID));
    sessionStorage.setItem("couponName", JSON.stringify(couponName));
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = "45%";

    this.dialog.open(ActivateCouponComponent, dialogConfig);

    this.dialog.afterAllClosed.subscribe;
  }

  onDeactivateCoupon(deactivateCouponID, couponName) {
    sessionStorage.setItem("deactivateCouponID", JSON.stringify(deactivateCouponID));
    sessionStorage.setItem("couponName", JSON.stringify(couponName));
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = "45%";

    this.dialog.open(DeactivateCouponComponent, dialogConfig);

    this.dialog.afterAllClosed.subscribe;
  }

  couponAccessed(couponName: any) {
    sessionStorage.setItem("CouponName", JSON.stringify(couponName));
    this.route.navigate(["/admin-dashboard/vmedo-subscription-module/managesubscription/couponaccessed"]);
  }
}
