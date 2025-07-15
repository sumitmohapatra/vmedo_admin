import { Component, OnInit } from '@angular/core';
import { ServicesService } from 'src/app/adminservice/services.service';
import { bedDetails } from '../hospitaldetails/bedlist';
import Swal from 'sweetalert2';

interface Status {
  id: number;
  value: string;
}

@Component({
  selector: 'app-hospitalchangesdetails',
  templateUrl: './hospitalchangesdetails.component.html',
  styleUrls: ['./hospitalchangesdetails.component.css']
})
export class HospitalchangesdetailsComponent implements OnInit {
  hospitalChangesDetails: any;
  hospital_id: any;
  id: any;
  statusApprove: number = 1;
  statusReject: number = 2;
  hospitalDetails: any;
  bedDataSource: any;
  previousHospitalDetails: any;

  updateStatus: Status[] = [
    { id: 1, value: 'Accept' },
    { id: 2, value: 'Reject' },
  ];

  constructor(private adminservice: ServicesService) {
    this.adminservice.getHospitalChangesDetailsData().subscribe(x => {
      this.hospitalChangesDetails = x['objret'];
      this.hospital_id = this.hospitalChangesDetails.hospitalID;
      this.id = this.hospitalChangesDetails.id;
    });
  }

  ngOnInit(): void {
    this.adminservice.getHospitalPreviousDetails().subscribe(data => {
      this.previousHospitalDetails = data['objret'];
      this.bedDataSource = data['objret']['bedlist'];
    });
  }

  approveHospitalChangesData(data: any) {
    this.adminservice.acceptOrRejectHospitalChangesData(data).subscribe((result: any) => {
      if (result.statusCode === 200) {
        this.successNotification();
        this.ngOnInit();
      }
    });
  }

  successNotification() {
    Swal.fire('Hospital', 'Action completed successfully!', 'success');
  }
}
