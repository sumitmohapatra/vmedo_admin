import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ServicesService } from 'src/app/adminservice/services.service';
import { MatDialogRef } from '@angular/material/dialog';
import Swal from 'sweetalert2';
import { HttpClient } from '@angular/common/http';
import { IDropdownSettings } from 'ng-multiselect-dropdown';

interface Status {
  id: number;
  value: string;
}

@Component({
  selector: 'app-hospitalupdatedetails',
  templateUrl: './hospitalupdatedetails.component.html',
  styleUrls: ['./hospitalupdatedetails.component.css'],
})

export class HospitalupdatedetailsComponent implements OnInit {

  hospitalUpdatesData: any;
  AcceptStatus: any = 1;
  RejectStatus: any = 2;

  updateStatus: Status[] = [
    { id: 1, value: 'Accept' },
    { id: 2, value: 'Reject' },
  ];

  hospitalEmergencyHandledDetails: any;
  hospitalSpecializationdDetails: any;
  selectedItems: any = [];

  constructor(private adminservice: ServicesService, private http: HttpClient) { }

  ngOnInit(): void {

    this.dropdownEmergencySettings = {
      idField: 'sid',
      textField: 'sval',
    };

    this.hospitalUpdatesData = JSON.parse(sessionStorage.getItem('hospitalUpdatesData'));

    this.adminservice.getHospitalEmergencyHandleDetails().subscribe(data => {
      this.hospitalEmergencyHandledDetails = data['objret']['emergencyHandeled'];
      this.hospitalSpecializationdDetails = data['objret']['lSpelization'];
    });

    this.getEmergencyData();
    this.getSpecializationData();
  }

  selectedEmergencyItems = [];
  dropdownEmergencyList: any;
  selectedValues = this.selectedEmergencyItems.map(({ sid }) => sid);

  dropdownEmergencySettings: IDropdownSettings = {};

  getEmergencyData(): void {
    this.http.get<any>('https://api.vmedo.com/api/hospital/GetAllHospitalSpelizationandEmergency?Rtype=2').subscribe(data => {
      this.dropdownEmergencyList = data;
    });
  }

  updateEmergencyHandeledData(emergencyHandeledData: any) {
    this.adminservice.updateEmergencyHandeled(emergencyHandeledData).subscribe((result: any) => {
      if (result.statusCode === 200) {
        this.successNotificationEmergencyHandeled();
      }
    });
  }

  successNotificationEmergencyHandeled() {
    Swal.fire('Hospital emergency handeled', 'Updated successfully !', 'success');
  }

  dropdownSpecializationList: any;
  selectedSpecializationItems = [];
  dropdownSpecializationSettings: IDropdownSettings = {};

  getSpecializationData(): void {
    this.http.get<any>('https://api.vmedo.com/api/hospital/GetAllHospitalSpelizationandEmergency?Rtype=1').subscribe(data => {
      this.dropdownSpecializationList = data;
    });
  }

  updateSpecializationData(specializationData: any) {
    this.adminservice.updateSpecialization(specializationData).subscribe((result: any) => {
      if (result.statusCode === 200) {
        this.successNotificationSpecialization();
      }
    });
  }

  successNotificationSpecialization() {
    Swal.fire('Hospital specialization', 'Updated successfully !', 'success');
  }

  hospitalAcceptUpdatesFormData(data: any) {
    sessionStorage.setItem("hospitalChangesApprovalData", JSON.stringify(data));
    this.adminservice.acceptOrRejecthospitalUpdatesData(data).subscribe((result: any) => {
      if (result.statusCode === 200) {
        this.successNotification();
        this.ngOnInit();
      }
    });
  }

  successNotification() {
    Swal.fire('Hospital changes request', 'Submitted successfully !', 'success');
  }
}
