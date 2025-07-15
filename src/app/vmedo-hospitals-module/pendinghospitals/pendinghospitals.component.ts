import { Component, OnInit, ViewChild } from '@angular/core';
import { ServicesService } from 'src/app/adminservice/services.service';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { BreakpointObserver } from '@angular/cdk/layout';
import { HospitalProperties } from '../hospitallist/hospitalProperties';

@Component({
  selector: 'app-pendinghospitals',
  templateUrl: './pendinghospitals.component.html',
  styleUrls: ['./pendinghospitals.component.css']
})
export class PendinghospitalsComponent implements OnInit {

  displayedColumns = ['hImage', 'hospitalName', 'hAddress', 'emergencyhandel', 'actions'];

  public dataSource = new MatTableDataSource<HospitalProperties>();

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  reviewData: any;

  constructor(private adminservice: ServicesService) {

    this.adminservice.getHospitalListComplete().subscribe(x => {
      this.dataSource.data = x['objret'].filter(m => m.approvalStatus === 0) as HospitalProperties[];
    });

  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  public doFilter = (value: string) => {
    this.dataSource.filter = value.trim().toLocaleLowerCase();
  }

  ngOnInit(): void {}

  getHospitalID(hospitalID) {
    sessionStorage.setItem("hospitalID", JSON.stringify(hospitalID));
  }
}
