import { Component, OnInit, ViewChild, OnDestroy } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ServicesService } from 'src/app/adminservice/services.service';
import { emergencyHandledList } from './emergencyHandledLIst';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { UpdateemergencyhandleComponent } from '../updateemergencyhandle/updateemergencyhandle.component';
import Swal from 'sweetalert2';
import { interval, Subscription } from 'rxjs';

@Component({
  selector: 'app-manageemergencyhandled',
  templateUrl: './manageemergencyhandled.component.html',
  styleUrls: ['./manageemergencyhandled.component.css']
})
export class ManageemergencyhandledComponent implements OnInit, OnDestroy {

  counter = interval(5000); // sets time interval
  subscription: Subscription | null = null;

  bedID: any;

  displayedColumns = ['id', 'emergencyhandel', 'actions'];

  public dataSource = new MatTableDataSource<emergencyHandledList>();

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(private adminservice: ServicesService, private dialog: MatDialog) {}

  ngOnInit(): void {
    this.bedID = 0;
    this.subscription = this.counter.subscribe(() => this.getEmergencyHandledList());
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

  hospitalEmergencyHandledData(data: any) {
    this.adminservice.addEmergencyHandledData(data).subscribe(
      (result: any) => {
        if (result.statusCode === 200) {
          this.successNotification();
          this.getEmergencyHandledList();
        }
      },
      (error) => {
        console.error('Error adding emergency handled data:', error);
        // Handle error, show notification, or take appropriate action
      }
    );
  }

  getEmergencyHandledList() {
    this.adminservice.getEmergencyHandledList().subscribe(
      (data: any) => {
        this.dataSource.data = data['objspl'];
      },
      (error) => {
        console.error('Error loading emergency handled list:', error);
        // Handle error, show notification, or take appropriate action
      }
    );
  }

  onEditEmergencyHandle(emergencyhandeldata: any) {
    sessionStorage.setItem('emergencyhandeldata', JSON.stringify(emergencyhandeldata));
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = '35%';
    this.dialog.open(UpdateemergencyhandleComponent, dialogConfig);
  }

  successNotification() {
    Swal.fire('Emergency handle', 'Created successfully!', 'success');
  }
}
