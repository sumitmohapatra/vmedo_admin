import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { ServicesService } from 'src/app/adminservice/services.service';
import { bedDetails } from '../hospitaldetails/bedlist';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-blockedhospitaldetails',
  templateUrl: './blockedhospitaldetails.component.html',
  styleUrls: ['./blockedhospitaldetails.component.css']
})
export class BlockedhospitaldetailsComponent implements OnInit {

  displayedBedColumns = ['bedType', 'totalBedAvalibale', 'bedAvalibale', 'updated_on'];

  public bedDataSource = new MatTableDataSource<bedDetails>();

  hospitalDetails: any;
  hospitalID: any;
  statusUnblock: number = 1;

  constructor(private adminService: ServicesService) { }

  ngOnInit(): void {
    this.hospitalID = JSON.parse(sessionStorage.getItem('hospitalID'));

    this.adminService.getHospitalDetails().subscribe(data => {
      this.hospitalDetails = data['objret'];
      this.bedDataSource.data = data['objret']['bedlist'] as bedDetails[];
    });
  }

  unblockHospitalData(data: any) {
    this.adminService.approveHospital(data).subscribe((result: any) => {
      if (result.statusCode === 200) {
        this.successNotification();
        this.ngOnInit();
      }
    });
  }

  successNotification() {
    Swal.fire('Hospital', 'Unblocked successfully!', 'success');
  }
}
