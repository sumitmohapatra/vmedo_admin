import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { ServicesService } from 'src/app/adminservice/services.service';
import Swal from 'sweetalert2';
import { ApproveSpecializationList } from './approveSpecialization';

interface Status {
  id: number;
  value: string;
}

@Component({
  selector: 'app-approvespecialization',
  templateUrl: './approvespecialization.component.html',
  styleUrls: ['./approvespecialization.component.css']
})
export class ApprovespecializationComponent implements OnInit {

  SType: any;
  specializationStatus: Status[] = [
    { id: 1, value: 'Accept' },
    { id: 2, value: 'Pending' },
  ];

  displayedspecializationColumns = ['id', 'hospitalName', 'aStatus', 'spilizationName', 'actions'];

  public specializationDataSource = new MatTableDataSource<ApproveSpecializationList>();

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(private adminservice: ServicesService) { }

  ngOnInit(): void {
    this.SType = 2;
    this.loadSpecializationData();
  }

  ngAfterViewInit() {
    this.specializationDataSource.paginator = this.paginator;
    this.specializationDataSource.sort = this.sort;
  }

  loadSpecializationData() {
    this.adminservice.GetHospitalsSpecializationApproval().subscribe(data => {
      this.specializationDataSource.data = data['objret'] as ApproveSpecializationList[];
    });
  }

  public doFilter = (value: string) => {
    this.specializationDataSource.filter = value.trim().toLocaleLowerCase();
  }

  approveHospitalSpecializationData(data: any) {
    this.adminservice.ApproveHospitalEmergencySpecializationData(data).subscribe((result: any) => {
      if (result.statusCode === 200) {
        this.successNotification();
        this.loadSpecializationData();
      }
    });
  }

  successNotification() {
    Swal.fire('Hospital', 'Action completed successfully!', 'success');
  }
}
