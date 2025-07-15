import { Component, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ServicesService } from 'src/app/adminservice/services.service';
import { couponaccessed } from './couponaccessed';

@Component({
  selector: 'app-coupon-accessed-details',
  templateUrl: './coupon-accessed-details.component.html',
  styleUrls: ['./coupon-accessed-details.component.css']
})
export class CouponAccessedDetailsComponent implements OnInit {

  displayedColumns = ['userName', 'userMobile', 'couponCode', 'useddateTime'];

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  public dataSource = new MatTableDataSource<couponaccessed>();

  constructor(private adminservice: ServicesService) { }

  ngOnInit(): void {
    this.adminservice.GetCouponUsedDetailsData().subscribe(x => {
      this.dataSource.data = x['objret'] as couponaccessed[];
    });
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  public doFilter = (value: string) => {
    this.dataSource.filter = value.trim().toLocaleLowerCase();
  }
}
