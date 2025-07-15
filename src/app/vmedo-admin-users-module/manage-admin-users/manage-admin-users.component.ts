import { Component, OnInit, ViewChild } from '@angular/core';
import { ServicesService } from 'src/app/adminservice/services.service';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { interval } from 'rxjs';
import { CreateAdminUsersComponent } from '../create-admin-users/create-admin-users.component';
import { EditAdminUsersComponent } from '../edit-admin-users/edit-admin-users.component';
import { manageUsers } from './manageUsers';


@Component({
  selector: 'app-manage-admin-users',
  templateUrl: './manage-admin-users.component.html',
  styleUrls: ['./manage-admin-users.component.css']
})
export class ManageAdminUsersComponent implements OnInit {


  counter = interval(15000); // sets time interval
  subscription: any = null;

  intervalid: any;

  // displayedColumns: String[] = ['id', 'packageName', 'packageAmount', 'packageDiscount', 'packageValidity','packageStatus','added_On', 'actions'];

  // displayedColumns: String[] = ['userName','roleType','userEmail', 'userMobile',  'createdontime', 'astatus', 'actions'];

  displayedColumns: String[] = ['userName','roleType','userEmail', 'userMobile', 'astatus', 'actions'];


  public dataSource = new MatTableDataSource<manageUsers>();


  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  reviewData: any;


  constructor(private adminservice: ServicesService, private dialog: MatDialog) {

    this.getUsersData();
    this.intervalid = setInterval(() => {
      this.getUsersData();
    }, 15000);


  }


  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  getUsersData() {

    this.adminservice.GetAllAdminUsersData().subscribe(x => {
      this.dataSource.data = x['objret'] as manageUsers[];

    })

  }

  ngOnInit(): void {



  }


  getRoleName(roleNumber: number): string {
    switch (roleNumber) {
      case 1:
        return 'Admin';
      case 2:
        return 'Ambulance';
      case 3:
        return 'Hospital';
      default:
        return 'Unknown';
    }
  }


  ngOnDestroy() {
    if (this.intervalid) {
      clearInterval(this.intervalid);
    }
  }

  public doFilter = (value: string) => {
    this.dataSource.filter = value.trim().toLocaleLowerCase();
  }

  onCreateAdminUser() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = "35%";

    this.dialog.open(CreateAdminUsersComponent, dialogConfig);

    this.dialog.afterAllClosed.subscribe

  }



  onEditAdminUsers(adminUserdata: any) {

    sessionStorage.setItem("adminUserData", JSON.stringify(adminUserdata));
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = "35%";
    // dialogConfig.data= {id: id, title: title, state: state, url: url, created_at: created_at, updated_at: updated_at}
    this.dialog.open(EditAdminUsersComponent, dialogConfig);

  }


}
