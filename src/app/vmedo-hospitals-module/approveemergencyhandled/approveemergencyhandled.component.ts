import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { ServicesService } from 'src/app/adminservice/services.service';
import Swal from 'sweetalert2';
import { ApproveEmergencyHandledList } from './approveEmergencyHandleList';

interface Status {
  id: number;
  value: string;
}

@Component({
  selector: 'app-approveemergencyhandled',
  templateUrl: './approveemergencyhandled.component.html',
  styleUrls: ['./approveemergencyhandled.component.css']
})
export class ApproveemergencyhandledComponent implements OnInit {

  EType: any;

  emergencyStatus: Status[] = [
    { id: 1, value: 'Accept' },
    { id: 2, value: 'Pending' },
  ];

  displayedEmergencyHandledColumns = ['id', 'hospitalName', 'aStatus', 'emergency', 'actions'];

  public emergencyHandledDataSource = new MatTableDataSource<ApproveEmergencyHandledList>();

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(private adminservice: ServicesService) { }

  ngOnInit(): void {
    this.EType = 1;
    this.loadEmergencyHandledData();
  }

  ngAfterViewInit() {
    this.emergencyHandledDataSource.paginator = this.paginator;
    this.emergencyHandledDataSource.sort = this.sort;
  }

  loadEmergencyHandledData() {
    this.adminservice.GetHospitalsEmergencyHandledApproval().subscribe(data => {
      this.emergencyHandledDataSource.data = data['objret'] as ApproveEmergencyHandledList[];
    });
  }

  public doFilter = (value: string) => {
    this.emergencyHandledDataSource.filter = value.trim().toLocaleLowerCase();
  }

  approveHospitalEmergencyData(data: any) {
    this.adminservice.ApproveHospitalEmergencySpecializationData(data).subscribe((result: any) => {
      if (result.statusCode === 200) {
        this.successNotification();
        this.loadEmergencyHandledData();
      }
    });
  }

  successNotification() {
    Swal.fire('Hospital', 'Action completed successfully!', 'success');
  }
}
