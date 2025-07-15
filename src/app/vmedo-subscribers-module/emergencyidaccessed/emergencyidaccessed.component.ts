import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ServicesService } from 'src/app/adminservice/services.service';
import { emergencyIdAccessedDetails } from './emergencyidaccessed';

@Component({
  selector: 'app-emergencyidaccessed',
  templateUrl: './emergencyidaccessed.component.html',
  styleUrls: ['./emergencyidaccessed.component.css']
})
export class EmergencyidaccessedComponent implements OnInit {
  public errorApi = false;

  displayedColumns = ['vname', 'vmobile', 'visited_on'];
  public dataSource = new MatTableDataSource<emergencyIdAccessedDetails>();

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(private adminservice: ServicesService) {}

  ngOnInit(): void {
    this.fetchEmergencyIdAccessedDetails();
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  public doFilter = (value: string) => {
    this.dataSource.filter = value.trim().toLocaleLowerCase();
  }

  private fetchEmergencyIdAccessedDetails() {
    this.adminservice.emergencyIdAccessedDetails().subscribe(
      (success) => {
        this.dataSource.data = success['objret'];
      },
      (error) => {
        this.errorApi = error.result == null || error.result === 0 || error.result.length === 0;
        // Handle errors or log them for debugging
      }
    );
  }
}
