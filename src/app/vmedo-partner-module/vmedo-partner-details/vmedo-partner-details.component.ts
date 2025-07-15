import { Component, OnInit } from '@angular/core';
import { UntypedFormBuilder, UntypedFormControl, UntypedFormGroup } from '@angular/forms';
import { MatDialog, MatDialogConfig, MatDialogRef } from '@angular/material/dialog';
import { Observable } from 'rxjs';
import { map, startWith, switchMap } from 'rxjs/operators';
import { ServicesService } from 'src/app/adminservice/services.service';
import Swal from 'sweetalert2';
import { EditPartnerDetailsComponent } from '../edit-partner-details/edit-partner-details.component';
import { UpdateVmedoPartnerAddressComponent } from '../update-vmedo-partner-address/update-vmedo-partner-address.component';
import { AddVmedoPartnerAddressComponent } from '../add-vmedo-partner-address/add-vmedo-partner-address.component';

@Component({
  selector: 'app-vmedo-partner-details',
  templateUrl: './vmedo-partner-details.component.html',
  styleUrls: ['./vmedo-partner-details.component.css']
})
export class VmedoPartnerDetailsComponent implements OnInit {

  partnerDetails: any;
  PartnerTypeID: any;
  partnerTypeListData: any;
  inputValue = new UntypedFormControl();
  filteredLocations: Observable<any[]>;
  selectedLocation: any;
  form: UntypedFormGroup;
  latitude: any;
  longitude: any;
  isStroked = false;

  constructor(
    private adminservice: ServicesService,
    private formBuilder: UntypedFormBuilder,
    private dialog: MatDialog,
    public dialogRef: MatDialogRef<VmedoPartnerDetailsComponent>
  ) {
    this.filteredLocations = this.inputValue.valueChanges.pipe(
      startWith(''),
      switchMap(value => this._filter(value))
    );

    this.form = this.formBuilder.group({
      latitude: null,
      longitude: null,
    });
  }

  ngOnInit(): void {
    this.editVmedoPartnerDetails();

    this.adminservice.getVmedoPartnerDataById().subscribe(data => {
      this.PartnerTypeID = data['objorg']['partner_type'];
    });

    this.adminservice.getVmedoPartnerTypeDetails().subscribe(data => {
      this.partnerTypeListData = data['objorg'];
      this.PartnerTypeID = this.partnerTypeListData.filter(m => m.id == this.PartnerTypeID).
        map(a => a.id);
      this.PartnerTypeID = Number(this.PartnerTypeID);
    });
  }

  private _filter(value: string): Observable<any[]> {
    return this.adminservice.getLocationsByInput(value).pipe(
      map(response => {
        if (response && response.objrt && response.objrt.predictions) {
          return response.objrt.predictions;
        }
        return [];
      })
    );
  }

  optionSelected(location: any) {
    this.selectedLocation = location;
    const placeId = this.selectedLocation.place_id;

    this.adminservice.getLocationDetailsByPlaceId(placeId).subscribe((details: any) => {
      this.latitude = details.objret.result.geometry.location.lat;
      this.longitude = details.objret.result.geometry.location.lng;
    });
  }

  editVmedoPartnerDetails() {
    this.adminservice.getVmedoPartnerDataById().subscribe((result: any) => {
      if (result.statusCode === 200) {
        this.partnerDetails = result['objorg'];
        console.log(this.partnerDetails);
      }
    });
  }

  onEditVmedoPartner(partnerID: any) {
    sessionStorage.setItem("vmedoPartnerID", JSON.stringify(partnerID));
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = "70%";
    this.dialog.open(EditPartnerDetailsComponent, dialogConfig);
    this.onClose();
  }

  onEditVmedoPartnerAddress(partnerAddressID: any) {
    sessionStorage.setItem("vmedoPartnerAddressID", JSON.stringify(partnerAddressID));
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = "50%";
    this.dialog.open(UpdateVmedoPartnerAddressComponent, dialogConfig);
    this.onClose();
  }

  editVmedoPartnersData(data: any) {
    console.warn(data);
    data.partnerorg_address = this.selectedLocation ? this.selectedLocation.description : '';
    this.adminservice.editVmedoPartnersData(data).subscribe((result: any) => {
      console.warn(result);
      if (result.statusCode === 200) {
        this.onClose();
        this.inputValue.reset();
        this.successNotification();
      }
    });
  }

  onAddVmedoPartnerAddress() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = "60%";
    this.dialog.open(AddVmedoPartnerAddressComponent, dialogConfig);
    this.dialog.afterAllClosed.subscribe;
    this.isStroked = true;
    this.onClose();
  }

  successNotification() {
    Swal.fire('Partner Details', 'Edited successfully!', 'success');
  }

  onClose() {
    this.dialogRef.close();
  }
}
