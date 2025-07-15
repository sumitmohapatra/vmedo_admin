import { DatePipe } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { ServicesService } from 'src/app/adminservice/services.service';
import { environment } from 'src/environments/environment';
import Swal from 'sweetalert2';


interface Status {
  id: string;
  value: string;
}

@Component({
  selector: 'app-update-corporate-plan',
  templateUrl: './update-corporate-plan.component.html',
  styleUrls: ['./update-corporate-plan.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class UpdateCorporatePlanComponent implements OnInit {
  CorporatesPlanData: any; 
  currentTime: any;
  currentDateTime: string;
  currentDateTime2: string;
  CorporatePlanTypeDetails: any;
  CorporateIdDetails: any;
  selectedPlanID: any;

  GetCorporatePlanDetailsUrl = environment.baseUrl + "vadmin/FetchManagecorporateplansbyid?id=";
  corporatePlanDetails: any;
  selectedPlan: any;
  selectedcorporateID: any;
  selectedCorporate: any;
  planStartDate: any;
  planEndDate: any;
  corporateID: any;
  planActiveStatus: any;


  constructor(private adminservice: ServicesService, private datePipe: DatePipe,
    public dialogRef: MatDialogRef<UpdateCorporatePlanComponent>, private http: HttpClient) {


    const currentTime = new Date();
    const timezone = 'Kolkata';
    const formattedTime = this.datePipe.transform(currentTime, 'yyyy-MM-ddTHH:mm:ss', timezone);

    this.currentTime = formattedTime;

    const now = new Date();
    const year = now.getFullYear();
    const month = now.getMonth() + 1;
    const day = now.getDate();
    const hours = now.getHours();
    const minutes = now.getMinutes();
    this.currentDateTime = `${year}-${month.toString().padStart(2, '0')}-${day.toString().padStart(2, '0')}T${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}`;
    this.currentDateTime2 = `${year}-${month.toString().padStart(2, '0')}-${day.toString().padStart(2, '0')}T${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}`;

 
 
    // this.selectedPlanID = this.CorporatesPlanData.organisationType;



 
 
  }

  corporateName: any;

  ngOnInit(): void {

    this.CorporatesPlanData = JSON.parse(sessionStorage.getItem('corporatePlanData'));
    // console.log(this.CorporatesPlanData);

    this.getCorporatePlanDataByID().subscribe(data => {
      this.corporatePlanDetails = data['objorg'];
      console.log(this.corporatePlanDetails);
      this.selectedPlanID = this.corporatePlanDetails.planID;
      this.selectedcorporateID = this.corporatePlanDetails.organisationID;
      this.planStartDate = this.corporatePlanDetails.planStartdate;
      this.planEndDate = this.corporatePlanDetails.planEnddate;
      this.corporateID = this.corporatePlanDetails.id;
      this.corporateName = this.corporatePlanDetails.organisationName
      this.planActiveStatus = this.corporatePlanDetails.planStatus;

      console.log(this.planActiveStatus);

      this.fetchCorporatePlanType();
      this.fetchCorporatesData();

    })

   

  }

  fetchCorporatePlanType() {
    this.adminservice.GetCorporatePlanType().subscribe(data => {
      this.CorporatePlanTypeDetails = data['objorg'];
      this.selectedPlan = this.CorporatePlanTypeDetails.filter(m => m.planID == this.selectedPlanID)
        .map(a => a.planID);
      this.selectedPlan = Number(this.selectedPlan);
      console.log(this.selectedPlan);
    });
  }
  
  fetchCorporatesData() {
    this.adminservice.GetCorporatesData().subscribe(data => {
      this.CorporateIdDetails = data['objorg'];
      this.selectedCorporate = this.CorporateIdDetails.filter(m => m.organisationID == this.selectedcorporateID)
        .map(a => a.organisationID);
      this.selectedCorporate = Number(this.selectedCorporate);
      console.log(this.selectedCorporate);
      // Now you can perform any other actions that depend on this data
    });
  }

  getCorporatePlanDataByID() {

    return this.http.get(this.GetCorporatePlanDetailsUrl + this.CorporatesPlanData);

  }

  updateCorporatePlanData(data: any) {

    console.log(data);

    this.adminservice.UpdateCorporatePlan(data).subscribe((result: any) => {

      if (result.statusCode === 200) {

        this.onClose();
        this.successNotification();

        //  this.successNotification();
        //  this.ngOnInit();
      }
    }
    )

  }

  corporateStatus: Status[] = [
    { id: 'true', value: 'Activate' },
    { id: 'false', value: 'Deactivate' },

  ];


  successNotification() {
    Swal.fire('Corporate plan', 'Updated Successfully !', 'success');
  }

  onClose() {

    this.dialogRef.close();

  }


}