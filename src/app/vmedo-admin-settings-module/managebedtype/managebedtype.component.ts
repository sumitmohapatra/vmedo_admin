import { Component, OnInit, ViewChild, OnDestroy } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ServicesService } from 'src/app/adminservice/services.service';
import { bedTypeList } from './bedTypeList';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import Swal from 'sweetalert2';
import { UpdatebedtypeComponent } from '../updatebedtype/updatebedtype.component';
import { Router } from '@angular/router';
import { interval, Subscription } from 'rxjs';

// Define an interface for the bed type data
interface BedType {
  bedtype: number;
  bedtypeName: string;
  // Add other properties as needed
}

@Component({
  selector: 'app-managebedtype',
  templateUrl: './managebedtype.component.html',
  styleUrls: ['./managebedtype.component.css']
})
export class ManagebedtypeComponent implements OnInit, OnDestroy {

  counter = interval(5000); // sets time interval
  subscription: any = null;
  id: any;

  bedID: any;

  displayedColumns = ['bedtype', 'bedtypeName', 'actions'];

  public dataSource = new MatTableDataSource<BedType>();
  private subscriptions: Subscription[] = [];

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  reviewData: any;

  hospitalDetails: any;
  hospitalID: any;
  statusTrue: boolean = true;
  statusFalse: boolean = false;

  constructor(private adminservice: ServicesService, private dialog: MatDialog, private router: Router) {
    this.getBedTypeData();
    this.id = setInterval(() => {
      this.getBedTypeData();
    }, 5000);
  }

  ngOnInit(): void {
    this.bedID = 0;
  }

  getBedTypeData() {
    this.subscriptions.push(
      this.adminservice.getBedTypeList().subscribe(
        (data: any) => {
          this.dataSource.data = data['objspl'] as BedType[];
        },
        (error) => {
          // Handle HTTP request error
          console.error('Error loading bed type:', error);
          // You can show an error notification or take appropriate action
        }
      )
    );
  }

  ngOnDestroy() {
    this.subscriptions.forEach((subscription) => subscription.unsubscribe());
    if (this.id) {
      clearInterval(this.id);
    }
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  public doFilter = (value: string) => {
    this.dataSource.filter = value.trim().toLocaleLowerCase();
  }

  bedTypeData(bedTypedetails: BedType) {
    this.subscriptions.push(
      this.adminservice.addBedTypeData(bedTypedetails).subscribe(
        (result: any) => {
          if (result.statusCode === 200) {
            this.successNotification();
            this.ngOnInit();
          }
        }
      )
    );
  }

  onEditBedType(bedtypedata: BedType) {
    sessionStorage.setItem("bedtypedata", JSON.stringify(bedtypedata));
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = "35%";
    this.dialog.open(UpdatebedtypeComponent, dialogConfig);
  }

  successNotification() {
    Swal.fire('Bed type', 'Created successfully!', 'success');
  }
}
