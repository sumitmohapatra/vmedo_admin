import { Component, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { ServicesService } from 'src/app/adminservice/services.service';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { createdBydetails } from './createdByDetails';

@Component({
  selector: 'app-createduserdetails',
  templateUrl: './createduserdetails.component.html',
  styleUrls: ['./createduserdetails.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class CreateduserdetailsComponent implements OnInit {
  userDetails: any;
  createdBydetails: any;

  constructor(private adminservice: ServicesService, public dialogRef: MatDialogRef<CreateduserdetailsComponent>) {}

  ngOnInit(): void {
    this.adminservice.GetCreatedUserDetailsData().subscribe((x) => {
      this.userDetails = x['objret'] as createdBydetails[];
    });
  }

  onClose() {
    this.dialogRef.close();
  }
}
