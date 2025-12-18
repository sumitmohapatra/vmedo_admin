import { Component, ViewChild } from '@angular/core';
import { MatDialogConfig, MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ServicesService } from 'src/app/adminservice/services.service';
import { CreateCategoryComponent } from '../create-category/create-category.component';
import { EditCategoryComponent } from '../edit-category/edit-category.component';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent {
 id: any;

  displayedColumns: String[] = ['name', 'imageUrl', 'description','actions'];

  public dataSource = new MatTableDataSource<any>();

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  dialogConfig27Percent80: MatDialogConfig = {
    disableClose: false,
    autoFocus: false,
    width: '27%',
    height: '80%'
  };

  constructor(private adminservice: ServicesService, private dialog: MatDialog, private modalService: NgbModal) {
    // constructor(private adminservice: ServicesService, private dialog: MatDialog) {

    this.getCategoryDetails();

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

  getCategoryDetails() {
    this.adminservice.getCategoryDetails().subscribe(
      (data: any) => {
        this.dataSource.data = data['objret']
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

  CreateCategory() {
    const dialogRef = this.dialog.open(CreateCategoryComponent, this.dialogConfig27Percent80);

    dialogRef.afterClosed().subscribe(result => {
    if (result) {
      this.getCategoryDetails();
    }
  });
  }

UpdateCategory(category: any) {
  const dialogRef = this.dialog.open(EditCategoryComponent, {
    width: '27%',
    height: '80%',
    disableClose: false,
    autoFocus: false,
    data: category
  });

  dialogRef.afterClosed().subscribe(result => {
    if (result) {
      this.getCategoryDetails(); 
    }
  });
}

}
