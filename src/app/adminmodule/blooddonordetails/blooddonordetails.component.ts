import { Component, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { ServicesService } from 'src/app/adminservice/services.service';
import { UseremergencyiddetailsComponent } from '../../vmedo-subscribers-module/useremergencyiddetails/useremergencyiddetails.component';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { catchError, finalize } from 'rxjs/operators';
import { throwError } from 'rxjs';
import { bloodDonorHistory } from './blooddonationhistory';

@Component({
  selector: 'app-blooddonordetails',
  templateUrl: './blooddonordetails.component.html',
  styleUrls: ['./blooddonordetails.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class BlooddonordetailsComponent implements OnInit {
  displayedColumns = ['donated_on', 'location', 'description'];
  dataSource = new MatTableDataSource<bloodDonorHistory>();
  bloodDonorDetails: any;
  bloodDonorHistory: any;

  constructor(
    private adminservice: ServicesService,
    public dialogRef: MatDialogRef<BlooddonordetailsComponent>
  ) {}

  ngOnInit(): void {
    this.loadBloodDonorHistory();
  }

  onClose() {
    this.dialogRef.close();
  }

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  public doFilter = (value: string) => {
    this.dataSource.filter = value.trim().toLocaleLowerCase();
  }

  private loadBloodDonorHistory() {
    this.adminservice
      .getBloodDonorHistroy()
      .pipe(
        catchError((error) => {
          // Handle errors appropriately, e.g., log or display a user-friendly message
          console.error('Error loading blood donor history:', error);
          return throwError(error);
        }),
        finalize(() => {
          // Perform any finalization logic, e.g., hide loading spinner
          // This block will be executed whether the request is successful or not
          // Consider using loading flags or spinners in the UI
        })
      )
      .subscribe((response) => {
        this.dataSource.data = response['objret'] as bloodDonorHistory[];
      });
  }
}
