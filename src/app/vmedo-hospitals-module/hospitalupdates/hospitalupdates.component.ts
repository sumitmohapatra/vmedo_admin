import { Component, OnInit, ViewChild } from '@angular/core';
import { ServicesService } from 'src/app/adminservice/services.service';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { BreakpointObserver } from '@angular/cdk/layout';
import { HospitalProperties } from '../hospitallist/hospitalProperties';
import { HospitalUpdatesList } from './hospitalUpdates';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { HospitalupdatedetailsComponent } from '../hospitalupdatedetails/hospitalupdatedetails.component';

@Component({
  selector: 'app-hospitalupdates',
  templateUrl: './hospitalupdates.component.html',
  styleUrls: ['./hospitalupdates.component.css']
})
export class HospitalupdatesComponent implements OnInit {

  displayedColumns = ['id','reqested_on', 'hname', 'requestchange','actions'];

  public dataSource = new MatTableDataSource<HospitalUpdatesList>();

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  reviewData: any;

  constructor(private adminservice: ServicesService, private dialog: MatDialog) {

    this.adminservice.getHospitalUpdatesData().subscribe(x => {
      this.dataSource.data = x['objspl'] as HospitalUpdatesList[];
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

  getHospitalID(data: any) {
    sessionStorage.setItem("hospitalUpdatesData", JSON.stringify(data));
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = false;
    dialogConfig.width = "55%";
    dialogConfig.height = "auto";
    this.dialog.open(HospitalupdatedetailsComponent, dialogConfig);
  }
}
