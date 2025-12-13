import { Component, ViewChild } from '@angular/core';
import { MatDialogConfig, MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ServicesService } from 'src/app/adminservice/services.service';
import { CreateProductComponent } from '../create-product/create-product.component';
import { UpdateProductComponent } from '../update-product/update-product.component';

@Component({
  selector: 'app-tez-product',
  templateUrl: './tez-product.component.html',
  styleUrls: ['./tez-product.component.css']
})
export class TezProductComponent {
id: any;

  displayedColumns: String[] = ['name', 'imageUrl', 'description','actions'];

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

    this.getAllProducts();

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

  getAllProducts() {
    this.adminservice.getProducts().subscribe(
      (data: any) => {
        this.dataSource.data = data['data']
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

  CreateProduct() {
    const dialogRef = this.dialog.open(CreateProductComponent, this.dialogConfig27Percent80);

    dialogRef.afterClosed().subscribe(result => {
    if (result) {
      this.getAllProducts();
    }
  });
  }

 UpdateProduct(product: any) {
  const dialogRef = this.dialog.open(UpdateProductComponent, {
    width: '27%',
    height: '80%',
    disableClose: false,
    autoFocus: false,
    data: product   // send the row data
  });

  dialogRef.afterClosed().subscribe(result => {
    if (result) {
      this.getAllProducts(); // Refresh product list
    }
  });
}

}
