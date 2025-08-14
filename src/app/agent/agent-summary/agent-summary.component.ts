import { DatePipe } from '@angular/common';
import { Component, ViewChild } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ServicesService } from 'src/app/adminservice/services.service';
import { UseremergencyiddetailsComponent } from 'src/app/vmedo-subscribers-module/useremergencyiddetails/useremergencyiddetails.component';

@Component({
  selector: 'app-agent-summary',
  templateUrl: './agent-summary.component.html',
  styleUrls: ['./agent-summary.component.css']
})
export class AgentSummaryComponent {
  id: any;

  displayedColumns: String[] = ['profilePhoto','uName', 'uMobile', 'uEmail', 'registered_on','packageName','packagevalid_till','hasEID','isPaidMember'];

  public dataSource = new MatTableDataSource<any>();

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  agents:any[] = [];
  agentId:string;

  dialogConfig27Percent80: MatDialogConfig = {
    disableClose: true,
    autoFocus: false,
    width: '27%',
    height: '80%'
  };

  constructor(private adminservice: ServicesService, private dialog: MatDialog, private modalService: NgbModal, private datePipe:DatePipe) {
    // constructor(private adminservice: ServicesService, private dialog: MatDialog) {
  }

  ngOnInit(): void { this.getAllAgents() }

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
        this.agents = data['objorg'];
        this.agentId = this.agents[0].agentId;
        this.getAllRegisteredUsersByAgent();
      },
      (error) => {
        console.error('Error:', error);
        // Handle error, show notification, or take appropriate action
      }
    );
  }

  getAllRegisteredUsersByAgent(){
    this.adminservice.getAllRegisteredUserByAgent(this.agentId).subscribe( (data:any) => {
      this.dataSource.data = data['objret'];
    })
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

  formatValidTillDate(dateStr: string): string {
    if (dateStr === '0001-01-01T00:00:00') {
      return 'N/A';
    }
    return this.datePipe.transform(dateStr, 'MMM d, y') || 'N/A';
    // or use Angular DatePipe if needed
  }

   onEmergencyID(emergencyUserID: any) {
      sessionStorage.setItem('emergencyUserID', JSON.stringify(emergencyUserID));
      const dialogConfig = new MatDialogConfig();
      dialogConfig.disableClose = true;
      dialogConfig.autoFocus = false;
      dialogConfig.width = '55%';
      dialogConfig.height = 'auto';
      this.dialog.open(UseremergencyiddetailsComponent, dialogConfig);
    }
}
