import { Component, ViewChild } from '@angular/core';
import { MatDialogConfig, MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ServicesService } from 'src/app/adminservice/services.service';
import { CreateProductVariantComponent } from '../create-product-variant/create-product-variant.component';
import { UpdateProductVariantComponent } from '../update-product-variant/update-product-variant.component';

@Component({
  selector: 'app-tez-product-variant',
  templateUrl: './tez-product-variant.component.html',
  styleUrls: ['./tez-product-variant.component.css']
})
export class TezProductVariantComponent {
id: any;

displayedColumns: string[] = [
  'productName',
  'variantName',
  'price',
  'discountPrice',
  'actions'
];

public dataSource = new MatTableDataSource<any>();

@ViewChild(MatPaginator) paginator: MatPaginator;
@ViewChild(MatSort) sort: MatSort;

dialogConfig27Percent80: MatDialogConfig = {
  disableClose: false,
  autoFocus: false,
  width: '27%',
  height: '80%'
};

constructor(
  private adminservice: ServicesService,
  private dialog: MatDialog
) {
  this.getAllVariantsList();
}

ngOnInit(): void {}

ngAfterViewInit() {
  this.dataSource.paginator = this.paginator;
  this.dataSource.sort = this.sort;
}

ngOnDestroy() {
  if (this.id) clearInterval(this.id);
}

/** 🔥 NEW — Fetch and flatten product + variant data */
getAllVariantsList() {
  this.adminservice.getAllVariants().subscribe(
    (res: any) => {
      const flatList = [];

      res.data.forEach(product => {
        if (product.variants.length > 0) {
          product.variants.forEach(variant => {
            flatList.push({
              productId: product.productId,
              productName: product.name,
              imageUrl: product.imageUrl,
              description: product.description,
              variantId: variant.variantId,
              variantName: variant.variantName,
              price: variant.price,
              discountPrice: variant.discountPrice
            });
          });
        }
      });

      this.dataSource.data = flatList;
    },
    error => {
      console.error('Error loading variants:', error);
    }
  );
}

doFilter(value: string) {
  this.dataSource.filter = value.trim().toLowerCase();
}

CreateVariant() {
  const dialogRef = this.dialog.open(CreateProductVariantComponent, this.dialogConfig27Percent80);

  dialogRef.afterClosed().subscribe(result => {
    if (result) {
      this.getAllVariantsList();
    }
  });
}

UpdateVariant(row: any) {
  const dialogRef = this.dialog.open(UpdateProductVariantComponent, {
    width: '27%',
    height: '80%',
    disableClose: false,
    autoFocus: false,
    data: row   // send row data to dialog
  });

  dialogRef.afterClosed().subscribe(result => {
    if (result) {
      this.getAllVariantsList();  // refresh table after update
    }
  });
}


}
