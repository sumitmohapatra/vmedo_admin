import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { corporatePlans } from './CorporatePlans';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { ServicesService } from 'src/app/adminservice/services.service';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { CreateCorporatePlanComponent } from '../create-corporate-plan/create-corporate-plan.component';
import { CreateCorporatePlanTypeComponent } from '../create-corporate-plan-type/create-corporate-plan-type.component';
import { Router } from '@angular/router';
import { UpdateCorporatePlanComponent } from '../update-corporate-plan/update-corporate-plan.component';
import { AddCorporatecreditComponent } from '../add-corporatecredit/add-corporatecredit.component';

@Component({
  selector: 'app-manage-corporate-plans',
  templateUrl: './manage-corporate-plans.component.html',
  styleUrls: ['./manage-corporate-plans.component.css']
})
export class ManageCorporatePlansComponent implements OnInit {

  id: any;

  displayedColumns: String[] = ['id', 'organisationName', 'organisationPlan', 'planCode', 'created_on', 'validtill', 'totalCredit', 'planStatus', 'actions'];

  public dataSource = new MatTableDataSource<corporatePlans>();

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  dialogConfig27Percent75: MatDialogConfig = {
    disableClose: true,
    autoFocus: false,
    width: '27%',
    height: '75%'
  };

  dialogConfig27Percent55: MatDialogConfig = {
    disableClose: true,
    autoFocus: false,
    width: '27%',
    height: '55%'
  };

  dialogConfig27Percent40: MatDialogConfig = {
    disableClose: true,
    autoFocus: true,
    width: '27%',
    height: '40%'
  };

  constructor(private adminservice: ServicesService, private dialog: MatDialog, private route: Router,private modalService: NgbModal) {

    this.getCorporatePlansData();

  }

  ngOnInit(): void {
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

  getCorporatePlansData() {
    this.adminservice.GetCorporatePlan().subscribe(
      (data: any) => {
        this.dataSource.data = data['objorg'] as corporatePlans[];
      },
      (error) => {
        console.error('Error:', error);
        // Handle error, show notification, or take appropriate action
      }
    );
  }

  public doFilter = (value: string) => {
    this.dataSource.filter = value.trim().toLocaleLowerCase();
  }

  CreateCorporatePlan() {
    this.dialog.open(CreateCorporatePlanComponent, this.dialogConfig27Percent75);
  }

  CreateCorporatePlanType() {
    this.dialog.open(CreateCorporatePlanTypeComponent, this.dialogConfig27Percent55);
  }

  UpdateCorporatePlan(corporatePlanData: any) {
    sessionStorage.setItem("corporatePlanData", JSON.stringify(corporatePlanData));
    this.dialog.open(UpdateCorporatePlanComponent, this.dialogConfig27Percent75);
  }

  addCredit(creditData: any) {
    sessionStorage.setItem("corporateCreditData", JSON.stringify(creditData));
    this.dialog.open(AddCorporatecreditComponent, this.dialogConfig27Percent40);
  }
}
