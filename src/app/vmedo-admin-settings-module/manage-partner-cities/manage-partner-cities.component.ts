import { Component, ViewChild, OnDestroy } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { interval, Subscription } from 'rxjs';
import { ServicesService } from 'src/app/adminservice/services.service';
import Swal from 'sweetalert2';
import { UpdatePartnerCityComponent } from '../update-partner-city/update-partner-city.component';
import { vmedoPartnerCity } from './vmedoPartnerCity';

// Define an interface for the partner city data
interface VmedoPartnerCity {
  id: number;
  name: string;
  // Add other properties as needed
}

@Component({
  selector: 'app-manage-partner-cities',
  templateUrl: './manage-partner-cities.component.html',
  styleUrls: ['./manage-partner-cities.component.css']
})
export class ManagePartnerCitiesComponent implements OnDestroy {
  counter = interval(5000); // sets time interval
  id: any;
  partnerID: any;

  displayedColumns = ['id', 'name', 'actions'];

  public dataSource = new MatTableDataSource<VmedoPartnerCity>();
  private subscriptions: Subscription[] = [];

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(private adminservice: ServicesService, private dialog: MatDialog) {}

  ngOnInit(): void {
    this.partnerID = 0;

    this.subscriptions.push(
      this.counter.subscribe(() => {
        this.subscriptions.push(
          this.adminservice.getVmedoPartnerCityDetails().subscribe(
            (data: any) => {
              this.dataSource.data = data['objorg'] as VmedoPartnerCity[];
            },
            (error) => {
              // Handle HTTP request error
              console.error('Error loading partner cities:', error);
              // You can show an error notification or take appropriate action
            }
          )
        );
      })
    );
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  public doFilter = (value: string) => {
    this.dataSource.filter = value.trim().toLocaleLowerCase();
  }

  ngOnDestroy() {
    this.subscriptions.forEach((subscription) => subscription.unsubscribe());
  }

  vmedoPartnerCityData(data: VmedoPartnerCity) {
    this.subscriptions.push(
      this.adminservice.createVmedoPartnerCityData(data).subscribe(
        (result: any) => {
          if (result.statusCode === 200) {
            this.successNotification();
            this.ngOnInit();
          }
        }
      )
    );
  }

  onEditVmedoPartnerCityData(partnerCityData: VmedoPartnerCity) {
    sessionStorage.setItem("partnercitydata", JSON.stringify(partnerCityData));
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = "35%";
    this.dialog.open(UpdatePartnerCityComponent, dialogConfig);
  }

  successNotification() {
    Swal.fire('Partner City', 'Created successfully!', 'success');
  }
}
