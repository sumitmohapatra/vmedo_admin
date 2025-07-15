import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { ServicesService } from 'src/app/adminservice/services.service';
import { bedDetails } from './bedlist';
import Swal from 'sweetalert2';
import { emergencyDetails } from './emergencyHandlelist';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { specializationDetails } from './specializationList';
import { Router } from '@angular/router';

interface Status {
  id: number;
  value: string;
}

@Component({
  selector: 'app-hospitaldetails',
  templateUrl: './hospitaldetails.component.html',
  styleUrls: ['./hospitaldetails.component.css']
})
export class HospitaldetailsComponent implements OnInit {

  displayedBedColumns = ['bedType', 'totalBedAvalibale', 'bedAvalibale', 'updated_on'];
  displayedEmergencyColumns = ['emergency', 'actions'];
  displayedSpecializationColumns = ['spilizationName', 'actions'];

  public emergencyDataSource = new MatTableDataSource<emergencyDetails>();
  public specializationDataSource = new MatTableDataSource<specializationDetails>();
  public bedDataSource = new MatTableDataSource<bedDetails>();

  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // MatTableDataSource defaults to lowercase matches
    this.bedDataSource.filter = filterValue;
  }

  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator, { read: true }) paginator: MatPaginator;

  hospitalDetails: any = [];
  hospitalID: any;
  statusApprove: any;
  statusReject: any;
  hospitalEmergencyData: any;
  hospitalSpecializationApprovalData: any;
  EType: any;
  SType: any;

  updateStatus: Status[] = [
    { id: 1, value: 'Accept' },
    { id: 2, value: 'Reject' },
  ];

  emergencyStatus: Status[] = [
    { id: 1, value: 'Accept' },
    { id: 2, value: 'Pending' },
  ];

  specializationStatus: Status[] = [
    { id: 1, value: 'Accept' },
    { id: 2, value: 'Pending' },
  ];

  constructor(private adminService: ServicesService, private route: Router) { }

  ngOnInit(): void {
    this.statusApprove = 1;
    this.statusReject = 2;
    this.EType = 1;
    this.SType = 2;

    this.hospitalID = JSON.parse(sessionStorage.getItem('hospitalID'));

    this.adminService.getHospitalDetails().subscribe(data => {
      this.hospitalDetails = data['objret'];
      this.bedDataSource.data = data['objret']['bedlist'] as bedDetails[];
    });

    this.adminService.GetHospitalEmergencyHandelApprovalData().subscribe(data => {
      this.hospitalEmergencyData = data['objret'];
      this.emergencyDataSource.data = data['objret'] as emergencyDetails[];
    });

    this.adminService.GetHospitalSpezializationApprovalData().subscribe(data => {
      this.hospitalSpecializationApprovalData = data['objret'];
      this.specializationDataSource.data = data['objret'] as specializationDetails[];
    });
  }

  ngAfterViewInit() {
    this.bedDataSource.paginator = this.paginator;
    this.bedDataSource.sort = this.sort;

    this.emergencyDataSource.paginator = this.paginator;
    this.emergencyDataSource.sort = this.sort;

    this.specializationDataSource.paginator = this.paginator;
    this.specializationDataSource.sort = this.sort;
  }

  approveHospitalEmergencyData(data: any) {
    this.adminService.ApproveHospitalEmergencySpecializationData(data).subscribe((result: any) => {
      if (result.statusCode === 200) {
        this.successNotification();
        this.ngOnInit();
      }
    });
  }

  approveHospitalSpecializationData(data: any) {
    this.adminService.ApproveHospitalEmergencySpecializationData(data).subscribe((result: any) => {
      if (result.statusCode === 200) {
        this.successNotification();
        this.ngOnInit();
      }
    });
  }

  approveHospitalData(data: any) {
    this.adminService.approveHospital(data).subscribe((result: any) => {
      if (result.statusCode === 200) {
        this.successNotification();
        this.route.navigate(['/admindashboard/hospitallist/registeredhospital']);
        this.ngOnInit();
      }
    });
  }

  successNotification() {
    Swal.fire('Hospital', 'Action completed successfully!', 'success');
  }
}
