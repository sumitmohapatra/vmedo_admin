import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { corporatesData } from './corporatesData';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { ServicesService } from 'src/app/adminservice/services.service';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { CreateCorporateComponent } from '../create-corporate/create-corporate.component';
import { UpdateCorporateComponent } from '../update-corporate/update-corporate.component';

@Component({
  selector: 'app-manage-corporates',
  templateUrl: './manage-corporates.component.html',
  styleUrls: ['./manage-corporates.component.css']
})
export class ManageCorporatesComponent implements OnInit {

  id: any;

  displayedColumns: String[] = ['organisationID', 'organisationLogo', 'added_on', 'organisationName', 'organisationEmail', 'organisationShortcode', 'organisationType', 'organisationStatus', 'actions'];

  public dataSource = new MatTableDataSource<corporatesData>();

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  dialogConfig27Percent80: MatDialogConfig = {
    disableClose: true,
    autoFocus: false,
    width: '27%',
    height: '80%'
  };

  constructor(private adminservice: ServicesService, private dialog: MatDialog, private modalService: NgbModal) {
    // constructor(private adminservice: ServicesService, private dialog: MatDialog) {

    this.getCorporatesData();

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

  getCorporatesData() {
    this.adminservice.GetCorporatesData().subscribe(
      (data: any) => {
        this.dataSource.data = data['objorg'] as corporatesData[];
      },
      (error) => {
        console.error('Error:', error);
        // Handle error, show notification, or take appropriate action
      }
    );
  }

  getCorporateType(roleNumber: number): string {
    switch (roleNumber) {
      case 1:
        return 'IT';
      case 2:
        return 'Finance';
      case 3:
        return 'Banking';
      default:
        return 'Unknown';
    }
  }

  public doFilter = (value: string) => {
    this.dataSource.filter = value.trim().toLocaleLowerCase();
  }

  CreateCorporate() {
    this.dialog.open(CreateCorporateComponent, this.dialogConfig27Percent80);
  }

  UpdateCorporate(corporateData: any) {
    sessionStorage.setItem("corporateData", JSON.stringify(corporateData));
    this.dialog.open(UpdateCorporateComponent, this.dialogConfig27Percent80);
  }
}
