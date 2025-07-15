import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { ServicesService } from 'src/app/adminservice/services.service';
import { Router } from '@angular/router';
import { ngxCsv } from 'ngx-csv';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { AddVmedoPartnerComponent } from '../add-vmedo-partner/add-vmedo-partner.component';
import { EditPartnerDetailsComponent } from '../edit-partner-details/edit-partner-details.component';
import { vmedoPartners } from './vmedoPartners';
import { VmedoPartnerDetailsComponent } from '../vmedo-partner-details/vmedo-partner-details.component';
import { interval } from 'rxjs';

export interface PeriodicElement {
  orgname: string;
  partner_type: string;
  email_ID: string;
  primary_phone_number: string;
  seconday_phone_number: string;
  address: string;
  status: string;
  details: string;
}

interface PartnerType {
  value: string;
  viewValue: string;
}

interface PartnerStatus {
  value: number;
  viewValue: string;
}

@Component({
  selector: 'app-vmedo-total-partners',
  templateUrl: './vmedo-total-partners.component.html',
  styleUrls: ['./vmedo-total-partners.component.css']
})
export class VmedoTotalPartnersComponent implements OnInit {

  element: any = {};
  userRole: any;
  id: any;

  counter = interval(5000);
  subscription: any = null;

  displayedColumns: String[] = ['id', 'partner_type', 'partnerorg_name', 'partnerorg_primaryphone',
    'partner_status', 'actions'];

  filteredData: vmedoPartners[] = [];

  partnerTypes: PartnerType[] = [
    { value: 'Hospital', viewValue: 'Hospital' },
    { value: 'Lab', viewValue: 'Lab' },
    { value: 'Ambulance', viewValue: 'Ambulance' },
    { value: 'Home healthcare', viewValue: 'Home healthcare' },
    // Add more partner types as needed
  ];

  partnerStatuses: PartnerStatus[] = [
    { value: 1, viewValue: 'Registered' },
    { value: 2, viewValue: 'Unregistered' },
    { value: 3, viewValue: 'Blocked' },
    // Add more partner statuses as needed
  ];

  selectedPartnerStatus: number;

  originalData: vmedoPartners[] = [];

  selectedPartnerType: string;

  public dataSource = new MatTableDataSource<vmedoPartners>();

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(private adminservice: ServicesService, private route: Router, private dialog: MatDialog) {
    this.getVmedoPartnersDetails();
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

  getVmedoPartnersDetails() {
    this.adminservice.GetVmedoPartnerDetails().subscribe(x => {
      this.originalData = x['objorg'] as vmedoPartners[];
      this.dataSource.data = this.originalData; // Initially display the original data
    });
  }

  public doFilter = (value: string) => {
    this.dataSource.filter = value.trim().toLocaleLowerCase();
  }

  onCreatePartner() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = "70%";
    this.dialog.open(AddVmedoPartnerComponent, dialogConfig);
    this.dialog.afterAllClosed.subscribe;
  }

  getVmedoPartnerDetails(partnerID: any) {
    sessionStorage.setItem("vmedoPartnerID", JSON.stringify(partnerID));
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = "55%";
    this.dialog.open(VmedoPartnerDetailsComponent, dialogConfig);
  }

  filterData() {
    let filteredData = this.originalData;

    if (this.selectedPartnerType) {
      filteredData = filteredData.filter(
        (element) => element.partner_type === this.selectedPartnerType
      );
    }

    if (this.selectedPartnerStatus) {
      filteredData = filteredData.filter(
        (element) => element.partner_status === this.selectedPartnerStatus
      );
    }

    this.dataSource.data = filteredData;
  }

  filterDataByPartnerType() {
    if (this.selectedPartnerType) {
      this.filteredData = this.originalData.filter(
        (element) => element.partner_type === this.selectedPartnerType
      );
      this.dataSource.data = this.filteredData;
    } else {
      this.dataSource.data = this.originalData;
    }
  }

  onEditVmedoPartner(partnerID: any) {
    sessionStorage.setItem("vmedoPartnerID", JSON.stringify(partnerID));
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = "70%";
    this.dialog.open(EditPartnerDetailsComponent, dialogConfig);
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
