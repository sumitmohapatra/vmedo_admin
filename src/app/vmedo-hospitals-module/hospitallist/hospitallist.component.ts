import { Component, OnInit, ViewChild } from '@angular/core';
import { ServicesService } from 'src/app/adminservice/services.service';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { BreakpointObserver } from '@angular/cdk/layout';
import { HospitalProperties } from './hospitalProperties';
import { ThemePalette } from '@angular/material/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-hospitallist',
  templateUrl: './hospitallist.component.html',
  styleUrls: ['./hospitallist.component.css']
})
export class HospitallistComponent implements OnInit {

  allHospitalNumber: any = [];
  approvedHospitalNumber: any = [];
  pendingHospitalNumber: any = [];
  blockedHospitalNumber: any = [];
  hospitalChangesNumber: any = [];
  hospitalUpdatesNumber: any = [];
  totalHospitalChangesNumber: any = [];
  rejectedHospitalNumber: any = [];
  emergencyHandledNumber: any = [];
  specializationNumber: any = [];

  constructor(private adminservice: ServicesService, private router: Router) {

    this.adminservice.getHospitalListComplete().subscribe(x => {
      this.allHospitalNumber = x['objret'];
      this.approvedHospitalNumber = x['objret']?.filter(m => m.approvalStatus === 1) as HospitalProperties[];
      this.pendingHospitalNumber = x['objret']?.filter(m => m.approvalStatus === 0) as HospitalProperties[];
      this.rejectedHospitalNumber = x['objret']?.filter(m => m.approvalStatus === 2) as HospitalProperties[];
      this.blockedHospitalNumber = x['objret']?.filter(m => m.approvalStatus === 3) as HospitalProperties[];
    });

    this.adminservice.hospitalChangesListData().subscribe(x => {
      this.hospitalChangesNumber = x['objspl'];
    });

    this.adminservice.getHospitalUpdatesData().subscribe(x => {
      this.hospitalUpdatesNumber = x['objspl'];
    });

    this.adminservice.GetHospitalsEmergencyHandledApproval().subscribe(x => {
      this.emergencyHandledNumber = x['objret'];
    });

    this.adminservice.GetHospitalsSpecializationApproval().subscribe(x => {
      this.specializationNumber = x['objret'];
    });
  }

  ngOnInit(): void {
  }
}
