import { LiveAnnouncer } from '@angular/cdk/a11y';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { MatAccordion } from '@angular/material/expansion';
import { MatSort, Sort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute, Router } from '@angular/router';
import { AddVmedoPartnerComponent } from '../add-vmedo-partner/add-vmedo-partner.component';
import { CreateVmedoPartnerComponent } from '../create-vmedo-partner/create-vmedo-partner.component';

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

const ELEMENT_DATA: PeriodicElement[] = [
  { orgname: 'Manipal', partner_type: 'hospital', email_ID: 'admin@manipal.com', primary_phone_number: '9876765676', seconday_phone_number: '8987656765', address: 'bengaluru', status: 'Active', details: 'Hospital partner' },
  { orgname: 'Apollo', partner_type: 'ambulance', email_ID: 'admin@apollo.com', primary_phone_number: '88654323456', seconday_phone_number: '8987656765', address: 'mysore', status: 'Active', details: 'ambulance partner' },
  { orgname: 'Columbia Asia', partner_type: 'ambulance', email_ID: 'admin@columbia.com', primary_phone_number: '77654567659', seconday_phone_number: '8987656765', address: 'hyderabad', status: 'Active', details: 'ambulance partner' },
  { orgname: 'Narayana', partner_type: 'hospital', email_ID: 'admin@narayana.com', primary_phone_number: '9889421345', seconday_phone_number: '8987656765', address: 'delhi', status: 'Active', details: 'Hospital partner' },
  { orgname: 'Aster', partner_type: 'hospital', email_ID: 'admin@aster.com', primary_phone_number: '9876765434', seconday_phone_number: '8987656765', address: 'gujrat', status: 'Active', details: 'Hospital partner' }
];

interface PartnerType {
  value: number;
  viewValue: string;
}

interface PartnerStatus {
  value: number;
  viewValue: string;
}

@Component({
  selector: 'app-vmedo-partners',
  templateUrl: './vmedo-partners.component.html',
  styleUrls: ['./vmedo-partners.component.css']
})

export class VmedoPartnersComponent implements OnInit {

  latitude: number = 37.7749;
  longitude: number = -122.4194;
  zoom: number = 10;
  isSearchSelected: boolean = false;
  isStroked = false;

  @ViewChild(MatAccordion) accordion: MatAccordion;
  orgname: string;
  partner_type: string;
  email_ID: string;
  primary_phone_number: string;
  seconday_phone_number: string;
  address: string;
  status: string;
  details: string;

  selectedTab: string = 'tab1';

  panelOpenState = false;

  partnerType: PartnerType[] = [
    { value: 0, viewValue: 'Hospital' },
    { value: 1, viewValue: 'Ambulance' }
  ];

  partnerStatus: PartnerStatus[] = [
    { value: 0, viewValue: 'registered' },
    { value: 1, viewValue: 'unregistered' },
    { value: 1, viewValue: 'blocked' },
  ];

  displayedColumns: string[] = ['orgname', 'partner_type', 'email_ID', 'primary_phone_number', 'seconday_phone_number', 'address', 'status', 'details'];
  dataSource = new MatTableDataSource(ELEMENT_DATA);

  constructor(private _liveAnnouncer: LiveAnnouncer, private router: Router, private dialog: MatDialog, private route: ActivatedRoute) {
    this.route.url.subscribe((segments) => {
      if (segments.length > 0) {
        const routeSegment = segments[0].path;
        this.selectedTab = routeSegment === 'vmedo-partners' ? 'tab1' : 'tab2';
      } else {
        this.selectedTab = 'tab1';
      }
    });
  }

  switchToTab(tab: string) {
    this.router.navigate([`/admindashboard/vmedo-partner/${tab}`]);
    this.isSearchSelected = tab === 'search-partner';
  }

  @ViewChild(MatSort) sort: MatSort;

  ngOnInit() {
    this.dataSource.sort = this.sort;
  }

  announceSortChange(sortState: Sort) {
    if (sortState.direction) {
      this._liveAnnouncer.announce(`Sorted ${sortState.direction}ending`);
    } else {
      this._liveAnnouncer.announce('Sorting cleared');
    }
  }

  onCreatePartner() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = "60%";
    this.dialog.open(CreateVmedoPartnerComponent, dialogConfig);
    this.dialog.afterAllClosed.subscribe;
    this.isStroked = true;
  }
}
