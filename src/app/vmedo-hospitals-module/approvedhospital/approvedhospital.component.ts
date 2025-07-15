import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { ServicesService } from 'src/app/adminservice/services.service';
import { bedDetails } from '../hospitaldetails/bedlist';
import Swal from 'sweetalert2';
import { specializationDetails } from './specializationDetails';
import { emergencyHandledDetails } from './emergencyHandledDetails';

@Component({
  selector: 'app-approvedhospital',
  templateUrl: './approvedhospital.component.html',
  styleUrls: ['./approvedhospital.component.css']
})
export class ApprovedhospitalComponent implements OnInit {

  displayedBedColumns = ['bedType', 'totalBedAvalibale', 'bedAvalibale', 'updated_on'];

  specializationColumns = ['eName', 'eStatus'];

  emergencyHandledColumns = ['eName', 'eStatus'];

  public bedDataSource = new MatTableDataSource<bedDetails>();

  public specializationDetails = new MatTableDataSource<specializationDetails>();

  public emergencyHandledSource = new MatTableDataSource<emergencyHandledDetails>();

  hospitalDetails: any;
  hospitalID: any;
  statusTrue: boolean = true;
  statusFalse: any;

  constructor(private adminService: ServicesService) { }

  ngOnInit(): void {
    this.statusFalse = 3;
    this.hospitalID = JSON.parse(sessionStorage.getItem('hospitalID'));

    this.adminService.getHospitalDetails().subscribe(data => {
      this.hospitalDetails = data['objret'];
      this.specializationDetails.data = data['objret']['lSpelization'] as specializationDetails[];
      this.emergencyHandledSource.data = data['objret']['emergencyHandeled'] as emergencyHandledDetails[];
      this.bedDataSource.data = data['objret']['bedlist'] as bedDetails[];
    });
  }

  approveHospitalData(data: any) {
    this.adminService.approveHospital(data).subscribe((result: any) => {
      if (result.statusCode === 200) {
        this.successNotification();
        this.ngOnInit();
      }
    });
  }

  successNotification() {
    Swal.fire('Hospital', 'Blocked successfully!', 'success');
  }
}
