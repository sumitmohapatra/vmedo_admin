import { Component, OnInit } from '@angular/core';
import { ServicesService } from 'src/app/adminservice/services.service';

@Component({
  selector: 'app-hospitalupdaterequest',
  templateUrl: './hospitalupdaterequest.component.html',
  styleUrls: ['./hospitalupdaterequest.component.css']
})
export class HospitalupdaterequestComponent implements OnInit {
  hospitalChangesNumber: any;
  hospitalUpdatesNumber: any;

  constructor(private adminservice: ServicesService) { 
    this.adminservice.hospitalChangesListData().subscribe(x => {
      this.hospitalChangesNumber = x['objspl'];
    });

    this.adminservice.getHospitalUpdatesData().subscribe(x => {
      this.hospitalUpdatesNumber = x['objspl'];
    });
  }

  ngOnInit(): void {
  }
}
