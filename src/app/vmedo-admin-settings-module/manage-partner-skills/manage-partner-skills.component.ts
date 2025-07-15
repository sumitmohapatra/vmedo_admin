import { Component, ViewChild, OnDestroy } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { interval, Subscription } from 'rxjs';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { ServicesService } from 'src/app/adminservice/services.service';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { UpdatePartnerSkillsComponent } from '../update-partner-skills/update-partner-skills.component';
import Swal from 'sweetalert2';

// Define an interface for the partner skills data
interface VmedoPartnerSkills {
  id: number;
  name: string;
  // Add other properties as needed
}

@Component({
  selector: 'app-manage-partner-skills',
  templateUrl: './manage-partner-skills.component.html',
  styleUrls: ['./manage-partner-skills.component.css']
})
export class ManagePartnerSkillsComponent implements OnDestroy {
  counter = interval(5000); // sets time interval
  id: any;

  partnerID: any;

  displayedColumns = ['id', 'name', 'actions'];

  public dataSource = new MatTableDataSource<VmedoPartnerSkills>();
  private subscriptions: Subscription[] = [];

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(private adminservice: ServicesService, private dialog: MatDialog) {}

  ngOnInit(): void {
    this.id = setInterval(() => {
      this.subscriptions.push(
        this.adminservice.getVmedoPartnerSkillsDetails().subscribe(
          (data: any) => {
            this.dataSource.data = data['objorg'] as VmedoPartnerSkills[];
          },
          (error) => {
            // Handle HTTP request error
            console.error('Error loading partner skills:', error);
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

  vmedoPartnerSkillsData(data: VmedoPartnerSkills) {
    this.subscriptions.push(
      this.adminservice.createVmedoPartnerSkills(data).subscribe(
        (result: any) => {
          if (result.statusCode === 200) {
            this.successNotification();
            this.ngOnInit();
          }
        }
      )
    );
  }

  onEditVmedoPartnerSkillsData(partnerSkillsData: VmedoPartnerSkills) {
    sessionStorage.setItem("partnerskillsdata", JSON.stringify(partnerSkillsData));
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = "35%";
    this.dialog.open(UpdatePartnerSkillsComponent, dialogConfig);
  }

  successNotification() {
    Swal.fire('Partner skills', 'Created successfully!', 'success');
  }
}
