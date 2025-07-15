import { Component, OnInit, ViewChild, OnDestroy } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ServicesService } from 'src/app/adminservice/services.service';
import { hospitalSpecialization } from './hospitalSpecializationList';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { UpdatespecializationComponent } from '../updatespecialization/updatespecialization.component';
import Swal from 'sweetalert2';
import { interval, Subscription } from 'rxjs';

@Component({
  selector: 'app-managespecialization',
  templateUrl: './managespecialization.component.html',
  styleUrls: ['./managespecialization.component.css']
})
export class ManagespecializationComponent implements OnInit, OnDestroy {

  counter = interval(5000); // sets time interval
  subscription: Subscription | null = null;

  bedID: any;

  displayedColumns = ['id', 'spelizationhandel', 'actions'];

  public dataSource = new MatTableDataSource<hospitalSpecialization>();

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(private adminservice: ServicesService, private dialog: MatDialog) {}

  ngOnInit(): void {
    this.bedID = 0;
    this.subscription = this.counter.subscribe(() => this.getHospitalSpecializationList());
  }

  ngOnDestroy() {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  public doFilter = (value: string) => {
    this.dataSource.filter = value.trim().toLocaleLowerCase();
  }

  hospitalSpecializationData(data: any) {
    this.adminservice.addSpecializationData(data).subscribe(
      (result: any) => {
        if (result.statusCode === 200) {
          this.successNotification();
          this.getHospitalSpecializationList();
        }
      },
      (error) => {
        console.error('Error adding specialization data:', error);
        // Handle error, show notification, or take appropriate action
      }
    );
  }

  getHospitalSpecializationList() {
    this.adminservice.getHospitalSpecializationList().subscribe(
      (data: any) => {
        this.dataSource.data = data['objspl'];
      },
      (error) => {
        console.error('Error loading hospital specialization list:', error);
        // Handle error, show notification, or take appropriate action
      }
    );
  }

  onEditSpecialization(specializationdata: any) {
    sessionStorage.setItem('specializationdata', JSON.stringify(specializationdata));
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = '35%';
    this.dialog.open(UpdatespecializationComponent, dialogConfig);
  }

  successNotification() {
    Swal.fire('Specialization', 'Created successfully!', 'success');
  }
}
