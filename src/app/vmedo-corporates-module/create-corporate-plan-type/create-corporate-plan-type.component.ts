import { DatePipe } from '@angular/common';
import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { ServicesService } from 'src/app/adminservice/services.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-create-corporate-plan-type',
  templateUrl: './create-corporate-plan-type.component.html',
  styleUrls: ['./create-corporate-plan-type.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class CreateCorporatePlanTypeComponent implements OnInit {

  currentTime:any;
  currentDateTime: string;
  planStatus: boolean = true;

  constructor(private adminservice:ServicesService,private datePipe: DatePipe,public dialogRef:MatDialogRef<CreateCorporatePlanTypeComponent>) {
    const currentTime = new Date();
    const timezone = 'Kolkata';
    const formattedTime = this.datePipe.transform(currentTime, 'yyyy-MM-ddTHH:mm:ss', timezone);
   

    this.currentTime=formattedTime;


    const now = new Date();
    const year = now.getFullYear();
    const month = now.getMonth() + 1;
    const day = now.getDate();
    const hours = now.getHours();
    const minutes = now.getMinutes();
    this.currentDateTime = `${year}-${month.toString().padStart(2, '0')}-${day.toString().padStart(2, '0')}T${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}`;

   }

  ngOnInit(): void {

    this.planStatus;

  }


  createCorporatePlanData(data: any) {

    console.log(data);

    this.adminservice.CreateCorporatePlanType(data).subscribe((result: any) => {
     
      if (result.statusCode === 200) {

         this.onClose();
        this.successNotification(); 

        //  this.successNotification();
        //  this.ngOnInit();
        }
    }
    )

  }

  successNotification() {
    Swal.fire('Corporate plan', 'Created Successfully !', 'success');
  }

  onClose(){
   
    this.dialogRef.close();
 
  
  }

}
