import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, NgForm, UntypedFormBuilder, UntypedFormControl, UntypedFormGroup } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { Observable } from 'rxjs';
import { map, startWith, switchMap } from 'rxjs/operators';
import { ServicesService } from 'src/app/adminservice/services.service';
import Swal from 'sweetalert2';
import { IDropdownSettings } from 'ng-multiselect-dropdown';

@Component({
  selector: 'app-create-vmedo-partner',
  templateUrl: './create-vmedo-partner.component.html',
  styleUrls: ['./create-vmedo-partner.component.css']
})
export class CreateVmedoPartnerComponent {
  toppings = new FormControl();
  toppingList = ['Extra cheese', 'Mushroom', 'Onion', 'Pepperoni', 'Sausage', 'Tomato'];
  selectedToppings;
  PartnerTypeDetails: any;
  inputValue = new UntypedFormControl();
  filteredLocations: Observable<any[]>;
  selectedLocation: any;
  form: UntypedFormGroup; // Define a form group
  latitude: any;
  longitude: any;
  skills: any[] = [];
  dropdownList: any[] = [];
  selectedItems = [];
  cityNames: any[] = [];
  selectedCity: any;
  myControl = new FormControl();
  filteredOptions: Observable<string[]>;
  dropdownSettings: IDropdownSettings;

  partnerID: any;
  partnerCities: any;
  listView: boolean = false;
  listView2: boolean = true;

  defaultService = 'services';

  constructor(private adminservice: ServicesService, private formBuilder: UntypedFormBuilder, public dialogRef: MatDialogRef<CreateVmedoPartnerComponent>) {
    this.partnerID = parseInt(sessionStorage.getItem('partnerid'), 10);

    this.filteredLocations = this.inputValue.valueChanges.pipe(
      startWith(''),
      switchMap(value => this._filters(value))
    );

    // Initialize the form group and form controls
    this.form = this.formBuilder.group({
      latitude: null,
      longitude: null,
    });
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

  optionSelected(location: any) {
    this.selectedLocation = location;

    const placeId = this.selectedLocation.place_id;

    this.adminservice.getLocationDetailsByPlaceId(placeId).subscribe((details: any) => {
      this.latitude = details.objret.result.geometry.location.lat;
      this.longitude = details.objret.result.geometry.location.lng;
    });
  }

  addVmedoPartnersAddressData(data: any) {
    console.warn(data);

    data.partner_city = this.selectedCity;
    data.partnerorg_address = this.selectedLocation ? this.selectedLocation.description : '';

    this.adminservice.createVmedoPartnerData(data).subscribe((result: any) => {
      console.warn(result);

      if (result.statusCode === 200) {
        this.inputValue.reset();
        this.successNotification();
        this.onClose();
      }
    });
  }

  addVmedoPartnersData(data: any) {
    console.warn(data);

    data.partner_skills = this.selectedItems.map(item => item.id);

    this.adminservice.addVmedoPartnersData(data).subscribe((result: any) => {
      console.warn(result);

      if (result.statusCode === 200) {
        this.inputValue.reset();
        const partnerid = result.pid;

        sessionStorage.setItem('partnerid', partnerid);

        this.partnerID = parseInt(sessionStorage.getItem('partnerid'), 10);

        this.listView = true;
      }
    });
  }

  successNotification() {
    Swal.fire('VMEDO Partner', 'Created successfully!', 'success');
  }

  successNotification2() {
    Swal.fire('VMEDO Partner Address', 'Added successfully!', 'success');
  }

  ngOnInit(): void {
    this.dropdownSettings = {
      singleSelection: false,
      idField: 'id',
      textField: 'name',
      selectAllText: 'Select All',
      unSelectAllText: 'UnSelect All',
      itemsShowLimit: 3,
      allowSearchFilter: true
    };

    this.adminservice.getVmedoPartnerTypeDetails().subscribe(data => {
      this.PartnerTypeDetails = data;
    });

    this.adminservice.getVmedoPartnerSkillsDetails().subscribe((response) => {
      this.skills = response['objorg'];
      this.dropdownList = response['objorg'];
    });

    this.adminservice.getVmedoPartnerCityDetails().subscribe(data => {
      this.partnerCities = data;
      this.cityNames = this.partnerCities['objorg'].map(city => city.name);
    });
  }

  onItemSelect(item: any) {
    console.log(item);
  }
  
  onSelectAll(items: any) {
    console.log(items);
  }

  isDropdownVisible: boolean = false;

  onDropdownVisibilityChange(isVisible: boolean) {
    this.isDropdownVisible = isVisible;
  }

  @ViewChild('addVmedoPartnerAddressForm') myForm: NgForm;

  saveAndAnotherAddress(data: any) {
    console.log(data);

    data.partner_city = this.selectedCity;
    data.partnerorg_address = this.selectedLocation ? this.selectedLocation.description : '';

    this.adminservice.createVmedoPartnerData(data).subscribe((result: any) => {
      console.warn(result);

      if (result.statusCode === 200) {
        this.inputValue.reset();
        this.partnerID = parseInt(sessionStorage.getItem('partnerid'), 10);
        const savedPartnerID = sessionStorage.getItem('partnerid');

        // Reset the form, excluding the partnerID field
        this.myForm.resetForm({ partner_id: savedPartnerID });
        this.myControl.reset();
        this.successNotification2();
      }
    });
  }

  displayListView() {
    this.listView2 = false;
  }

  onClose() {
    this.dialogRef.close();
  }

  optionCitySelected(option: any) {
    this.selectedCity = option;
  }
}
