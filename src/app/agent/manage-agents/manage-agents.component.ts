import { Component, ViewChild } from '@angular/core';
import { CreateVmedoAgentComponent } from '../create-vmedo-agent/create-vmedo-agent.component';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ServicesService } from 'src/app/adminservice/services.service';
import { MatDialogConfig, MatDialog } from '@angular/material/dialog';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { corporatesData } from 'src/app/vmedo-corporates-module/manage-corporates/corporatesData';

@Component({
  selector: 'app-manage-agents',
  templateUrl: './manage-agents.component.html',
  styleUrls: ['./manage-agents.component.css']
})
export class ManageAgentsComponent {
 id: any;

  displayedColumns: String[] = ['agentName', 'agentMobile', 'agentEmail', 'agentCity', 'agentAddress', 'agentZip', 'createdOn', 'actions'];

  public dataSource = new MatTableDataSource<any>();

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  dialogConfig27Percent80: MatDialogConfig = {
    disableClose: true,
    autoFocus: false,
    width: '27%',
    height: '80%'
  };

  constructor(private adminservice: ServicesService, private dialog: MatDialog, private modalService: NgbModal) {
    // constructor(private adminservice: ServicesService, private dialog: MatDialog) {

    this.getAllAgents();

  }

  ngOnInit(): void {}

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  ngOnDestroy() {
    if (this.id) {
      clearInterval(this.id);
    }
  }

  getAllAgents() {
    this.adminservice.getAllAgents().subscribe(
      (data: any) => {
        this.dataSource.data = data['objorg'];
      },
      (error) => {
        console.error('Error:', error);
        // Handle error, show notification, or take appropriate action
      }
    );
  }

  getCorporateType(roleNumber: number): string {
    switch (roleNumber) {
      case 1:
        return 'IT';
      case 2:
        return 'Finance';
      case 3:
        return 'Banking';
      default:
        return 'Unknown';
    }
  }

  public doFilter = (value: string) => {
    this.dataSource.filter = value.trim().toLocaleLowerCase();
  }

  CreateCorporate() {
    this.dialog.open(CreateVmedoAgentComponent, this.dialogConfig27Percent80);
  }

  UpdateCorporate(corporateData: any) {
    // sessionStorage.setItem("corporateData", JSON.stringify(corporateData));
    // this.dialog.open(UpdateCorporateComponent, this.dialogConfig27Percent80);
  }
}
