import { Component, OnInit } from '@angular/core';
import { FormControl, UntypedFormBuilder, UntypedFormControl, UntypedFormGroup } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { Observable } from 'rxjs';
import { map, startWith, switchMap } from 'rxjs/operators';
import { ServicesService } from 'src/app/adminservice/services.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-update-vmedo-partner-address',
  templateUrl: './update-vmedo-partner-address.component.html',
  styleUrls: ['./update-vmedo-partner-address.component.css']
})
export class UpdateVmedoPartnerAddressComponent {

  PartnerTypeDetails: any;
  inputValue = new UntypedFormControl();
  filteredLocations: Observable<any[]>;
  selectedLocation: any;
  form: UntypedFormGroup;
  latitude: any;
  longitude: any;

  skills: any[] = [];

  partnerID: any;
  partnerCities: any;
  listView: boolean = false;
  listView2: boolean = true;
  selectedPartnerID: any;
  selectedPartnerAddressID: any;
  PartnerAddressDetails: any;
  partnerCity: string;

  myControl = new FormControl();
  filteredOptions: Observable<string[]>;
  cityNames: any[] = [];
  selectedCity: any;
  selectedPartnerCity: any;

  constructor(private adminservice: ServicesService, private formBuilder: UntypedFormBuilder, public dialogRef: MatDialogRef<UpdateVmedoPartnerAddressComponent>) {

    this.partnerID = sessionStorage.getItem('partnerid');

    this.filteredLocations = this.inputValue.valueChanges.pipe(
      startWith(''),
      switchMap(value => this._filters(value))
    );

    this.form = this.formBuilder.group({
      latitude: null,
      longitude: null,
    });
  }

  ngOnInit(): void {
    this.selectedPartnerID = parseInt(sessionStorage.getItem('vmedoPartnerID'), 10);
    this.selectedPartnerAddressID = parseInt(sessionStorage.getItem('vmedoPartnerAddressID'), 10);

    this.adminservice.getVmedoPartnerTypeDetails().subscribe(data => {
      this.PartnerTypeDetails = data;
    });

    this.adminservice.getVmedoPartnerSkillsDetails().subscribe((response) => {
      this.skills = response['objorg'];
      console.log(this.skills);
    });

    this.adminservice.getVmedoPartnerAddressDataById().subscribe(data => {
      this.PartnerAddressDetails = data['objorg'];
      this.partnerCity = this.PartnerAddressDetails.partner_city;
    });

    this.adminservice.getVmedoPartnerCityDetails().subscribe(data => {
      this.partnerCities = data;
      this.cityNames = this.partnerCities['objorg'].map(city => city.name);

      this.myControl.setValue(this.partnerCity);

      this.selectedPartnerCity = this.cityNames.filter(m => m.name == this.partnerCity).
        map(a => a.name);
      this.selectedPartnerCity = String(this.selectedPartnerCity);

    });
  }

  private _filters(value: string): Observable<any[]> {
    return this.adminservice.getLocationsByInput(value).pipe(
      map(response => {
        if (response && response.objrt && response.objrt.predictions) {
          return response.objrt.predictions;
        }
        return [];
      })
    );
  }

  private _filter(value: any): any[] {
    const filterValue = value.toLowerCase();
    return this.cityNames.filter(option => option.toLowerCase().includes(filterValue));
  }

  onClickButton(): void {
    this.filteredOptions = this.myControl.valueChanges.pipe(
      startWith(''),
      map(value => this._filter(value)),
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

  optionCitySelected(option: any) {
    this.selectedCity = option;
  }

  updateVmedoPartnersAddressData(data: any) {
    console.warn(data);

    data.partnerorg_address = this.selectedLocation ? this.selectedLocation.description : this.PartnerAddressDetails.partnerorg_address;
    data.partner_city = this.selectedCity ? this.selectedCity : this.PartnerAddressDetails.partner_city;

    this.adminservice.updateVmedoPartnerAddressData(data).subscribe((result: any) => {
      console.warn(result);

      if (result.statusCode === 200) {
        this.onClose();
        this.inputValue.reset();
        this.successNotification();

        const partnerid = result.pid;
        sessionStorage.setItem('partnerid', partnerid);

        this.partnerID = sessionStorage.getItem('partnerid');
      }
    });
  }

  displayListView() {
    this.listView = true;
    this.listView2 = false;
  }

  successNotification() {
    Swal.fire('Partner Address Details', 'Updated successfully !', 'success');
  }

  onClose() {
    this.dialogRef.close();
  }
}
