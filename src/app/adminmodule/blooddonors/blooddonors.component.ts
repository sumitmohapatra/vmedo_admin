import { Component, OnInit, ViewChild, OnDestroy } from '@angular/core';
import { ServicesService } from 'src/app/adminservice/services.service';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { BlooddonordetailsComponent } from '../blooddonordetails/blooddonordetails.component';
import { bloodDonorList } from './bloodDonorList';
import { interval, Subscription } from 'rxjs';
import { catchError, finalize } from 'rxjs/operators';
import { throwError } from 'rxjs';

@Component({
  selector: 'app-blooddonors',
  templateUrl: './blooddonors.component.html',
  styleUrls: ['./blooddonors.component.css'],
})
export class BlooddonorsComponent implements OnInit, OnDestroy {
  counter = interval(5000); // sets time interval
  subscription: Subscription | null = null;
  id: any;

  displayedColumns: String[] = [
    'id',
    'name',
    'bloodgroup',
    'bcount',
    'ulocation',
    'actions',
  ];

  public dataSource = new MatTableDataSource<bloodDonorList>();

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  blooddonorslist: any;
  allBloodDonorData: any;

  constructor(private adminservice: ServicesService, private dialog: MatDialog) {
    this.getBloodDonorData();

    this.id = setInterval(() => {
      this.getBloodDonorData();
    }, 5000);

    this.subscription = this.counter.subscribe(() => {
      this.loadBloodDonorsList();
    });
  }

  ngOnInit(): void {}

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  ngOnDestroy() {
    if (this.id) {
      clearInterval(this.id);
    }
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }

  getBloodDonorData() {
    this.adminservice.getallBloodDonorList().subscribe(
      (response) => {
        this.dataSource.data = response['objret'];
      },
      (error) => {
        console.error('Error loading blood donor list:', error);
        // Handle errors appropriately, e.g., log or display a user-friendly message
      }
    );
  }

  public doFilter = (value: string) => {
    this.dataSource.filter = value.trim().toLocaleLowerCase();
  }

  getHospitalID(hospitalID) {
    sessionStorage.setItem('hospitalID', JSON.stringify(hospitalID));
  }

  onBloodDonorID(bloodDonorID: any) {
    sessionStorage.setItem('bloodDonorID', JSON.stringify(bloodDonorID));
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = false;
    dialogConfig.width = '55%';
    dialogConfig.height = 'auto';
    this.dialog.open(BlooddonordetailsComponent, dialogConfig);
  }

  private loadBloodDonorsList() {
    this.adminservice.usersRegisteredList().pipe(
      catchError((error) => {
        console.error('Error loading blood donor list:', error);
        return throwError(error);
      }),
      finalize(() => {
        // Perform any finalization logic, e.g., hide loading spinner
        // This block will be executed whether the request is successful or not
        // Consider using loading flags or spinners in the UI
      })
    ).subscribe((response) => {
      this.blooddonorslist = response['objret'];
    });
  }
}
