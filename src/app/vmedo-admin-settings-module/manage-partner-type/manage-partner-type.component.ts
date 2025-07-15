import { Component, OnInit, ViewChild, OnDestroy } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { interval, Subscription } from 'rxjs';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { ServicesService } from 'src/app/adminservice/services.service';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { EditPartnerTypeComponent } from '../edit-partner-type/edit-partner-type.component';
import Swal from 'sweetalert2';

// Define an interface for the partner type data
interface VmedoPartnerType {
  id: number;
  type_name: string;
  // Add other properties as needed
}

@Component({
  selector: 'app-manage-partner-type',
  templateUrl: './manage-partner-type.component.html',
  styleUrls: ['./manage-partner-type.component.css']
})
export class ManagePartnerTypeComponent implements OnInit, OnDestroy {

  counter = interval(5000); // sets time interval
  id: any;
  partnerID: any;

  displayedColumns = ['id', 'type_name', 'actions'];

  public dataSource = new MatTableDataSource<VmedoPartnerType>();
  private subscriptions: Subscription[] = [];

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(private adminservice: ServicesService, private dialog: MatDialog) {}

  ngOnInit(): void {
    this.partnerID = 0;

    this.id = setInterval(() => {
      this.subscriptions.push(
        this.adminservice.getVmedoPartnerTypeDetails().subscribe(
          (data: any) => {
            this.dataSource.data = data['objorg'] as VmedoPartnerType[];
          },
          (error) => {
            // Handle HTTP request error
            console.error('Error loading partner type:', error);
            // You can show an error notification or take appropriate action
          }
        )
      );
    }, 5000);
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
    if (this.id) {
      clearInterval(this.id);
    }
  }

  vmedoPartnerTypeData(data: VmedoPartnerType) {
    this.subscriptions.push(
      this.adminservice.createPartnerTypeData(data).subscribe(
        (result: any) => {
          if (result.statusCode === 200) {
            this.successNotification();
            this.ngOnInit();
          }
        }
      )
    );
  }

  onEditVmedoPartnerTypeData(partnerTypeData: VmedoPartnerType) {
    sessionStorage.setItem("partnertypedata", JSON.stringify(partnerTypeData));
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = "35%";
    this.dialog.open(EditPartnerTypeComponent, dialogConfig);
  }

  successNotification() {
    Swal.fire('Partner type', 'Created successfully!', 'success');
  }

}
