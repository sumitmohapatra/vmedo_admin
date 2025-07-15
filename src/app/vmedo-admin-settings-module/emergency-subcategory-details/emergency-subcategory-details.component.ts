import { Component, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ServicesService } from 'src/app/adminservice/services.service';
import { subcategoryDetails } from './subcategorydetails';

// Define an interface for the subcategory details
interface SubcategoryDetails {
  // Define the structure based on your actual data
  // For example:
  id: number;
  emergencycategory: string;
  // Add other properties as needed
}

@Component({
  selector: 'app-emergency-subcategory-details',
  templateUrl: './emergency-subcategory-details.component.html',
  styleUrls: ['./emergency-subcategory-details.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class EmergencySubcategoryDetailsComponent implements OnInit {

  displayedColumns = ['emergencycategory'];

  public dataSource = new MatTableDataSource<SubcategoryDetails>();

  constructor(private adminservice: ServicesService, public dialogRef: MatDialogRef<EmergencySubcategoryDetailsComponent>) { }

  ngOnInit(): void {
    this.adminservice.GetEmergencyHandleSubcategoryData().subscribe(
      (data: any) => {
        this.dataSource.data = data['objspl'] as SubcategoryDetails[];
      },
      (error) => {
        // Handle HTTP request error
        console.error('Error loading emergency subcategory details:', error);
        // You can show an error notification or take appropriate action
      }
    );
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
}
