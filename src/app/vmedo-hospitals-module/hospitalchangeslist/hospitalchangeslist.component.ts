import { Component, OnInit, ViewChild } from '@angular/core';
import { ServicesService } from 'src/app/adminservice/services.service';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { BreakpointObserver } from '@angular/cdk/layout';
import { HospitalProperties } from '../hospitallist/hospitalProperties';

@Component({
  selector: 'app-hospitalchangeslist',
  templateUrl: './hospitalchangeslist.component.html',
  styleUrls: ['./hospitalchangeslist.component.css']
})
export class HospitalchangeslistComponent implements OnInit {

  displayedColumns = ['reqested_on', 'hname', 'actions'];

  public dataSource = new MatTableDataSource<HospitalProperties>();

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  reviewData: any;

  constructor(private adminservice: ServicesService) {
    this.adminservice.hospitalChangesListData().subscribe(x => {
      this.dataSource.data = x['objspl'] as HospitalProperties[];
    });
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  public doFilter = (value: string) => {
    this.dataSource.filter = value.trim().toLocaleLowerCase();
  }

  ngOnInit(): void {
  }
  
  getID(ID) {
    sessionStorage.setItem("hospitalchangesObject", JSON.stringify(ID));
  }
}
