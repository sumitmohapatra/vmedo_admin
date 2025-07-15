import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Router } from '@angular/router';
import { CreateCorporatePlanTypeComponent } from '../create-corporate-plan-type/create-corporate-plan-type.component';
import { ServicesService } from 'src/app/adminservice/services.service';
import { corporatePlanTypeDetails } from './corporatePlanTypeDetails';

@Component({
  selector: 'app-corporate-plan-type-details',
  templateUrl: './corporate-plan-type-details.component.html',
  styleUrls: ['./corporate-plan-type-details.component.css']
})
export class CorporatePlanTypeDetailsComponent implements OnInit {

  id: any;

  displayedColumns: string[] = ['planName', 'planDescription', 'planStatus'];
  dataSource = new MatTableDataSource<corporatePlanTypeDetails>();

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(
    private adminservice: ServicesService,
    private dialog: MatDialog,
    private modalService: NgbModal,
    private route: Router
  ) {
    this.getCorporatePlansTypeDetailsData();
  }

  ngOnInit(): void {}

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  ngOnDestroy() {
    if (this.id) {
      clearInterval(this.id);
    }
  }

  getCorporatePlansTypeDetailsData() {
    this.adminservice.GetCorporatePlanTypeDetails().subscribe(
      (data: corporatePlanTypeDetails[]) => {
        this.dataSource.data = data ['objorg'];
      },
      (error) => {
        console.error('Error fetching corporate plan type details:', error);
        // Handle error, show notification, or take appropriate action
      }
    );
  }

  public doFilter = (value: string) => {
    this.dataSource.filter = value.trim().toLocaleLowerCase();
  }

  CreateCorporatePlanType() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = false;
    dialogConfig.width = '27%';
    dialogConfig.height = '55%';
    this.dialog.open(CreateCorporatePlanTypeComponent, dialogConfig);
  }
}
