import { Component, OnInit, ViewChild, OnDestroy } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ServicesService } from 'src/app/adminservice/services.service';
import Swal from 'sweetalert2';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { Subscription } from 'rxjs';
import { emergencyHandledList } from '../manageemergencyhandled/emergencyHandledLIst';
import { EmergencySubcategoryDetailsComponent } from '../emergency-subcategory-details/emergency-subcategory-details.component';

// Define an interface for the emergency handled list
interface EmergencyHandledList {
  // Define the structure based on your actual data
  id: number;
  emergencyhandel: string;
  // Add other properties as needed
}

@Component({
  selector: 'app-manage-emergency-subcategory',
  templateUrl: './manage-emergency-subcategory.component.html',
  styleUrls: ['./manage-emergency-subcategory.component.css']
})
export class ManageEmergencySubcategoryComponent implements OnInit, OnDestroy {

  EmergencyDetails: any;

  displayedColumns = ['id', 'emergencyhandel', 'actions'];

  public dataSource = new MatTableDataSource<EmergencyHandledList>();
  private subscriptions: Subscription[] = [];

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(private adminservice: ServicesService, private dialog: MatDialog) { }

  ngOnInit(): void {
    this.subscriptions.push(
      this.adminservice.getEmergencyHandledList().subscribe(
        (data: any) => {
          this.dataSource.data = data['objspl'] as EmergencyHandledList[];
        },
        (error) => {
          // Handle HTTP request error
          console.error('Error loading emergency handled list:', error);
          // You can show an error notification or take appropriate action
        }
      )
    );

    this.subscriptions.push(
      this.adminservice.getEmergencyHandledList().subscribe(
        (data) => {
          this.EmergencyDetails = data;
        }
      )
    );
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  ngOnDestroy() {
    this.subscriptions.forEach(subscription => subscription.unsubscribe());
  }

  public doFilter = (value: string) => {
    this.dataSource.filter = value.trim().toLocaleLowerCase();
  }

  emergencyHandledSubcategoryData(subcategorydata: EmergencyHandledList) {
    console.warn(subcategorydata);
    this.subscriptions.push(
      this.adminservice.updateEmegencySubcategoryData(subcategorydata).subscribe(
        (result: any) => {
          console.warn(result);

          if (result.statusCode === 200) {
            this.successNotification();
          }
        },
        (error) => {
          // Handle HTTP request error
          console.error('Error updating emergency subcategory data:', error);
          // You can show an error notification or take appropriate action
        }
      )
    );
  }

  onClickEmergencyHandleSubcategory(emergencyhandelsubcategorydata: EmergencyHandledList) {
    sessionStorage.setItem("emergencyhandelSubcategorydata", JSON.stringify(emergencyhandelsubcategorydata));
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = "35%";
    this.dialog.open(EmergencySubcategoryDetailsComponent, dialogConfig);
  }

  successNotification() {
    Swal.fire('Emergency handle', 'Created successfully!', 'success');
  }
}
