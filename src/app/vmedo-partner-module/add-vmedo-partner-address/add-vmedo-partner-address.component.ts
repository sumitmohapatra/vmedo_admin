import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, NgForm, UntypedFormBuilder, UntypedFormControl, UntypedFormGroup } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { Observable } from 'rxjs';
import { map, startWith, switchMap } from 'rxjs/operators';
import { ServicesService } from 'src/app/adminservice/services.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-add-vmedo-partner-address',
  templateUrl: './add-vmedo-partner-address.component.html',
  styleUrls: ['./add-vmedo-partner-address.component.css']
})
export class AddVmedoPartnerAddressComponent implements OnInit {
  PartnerTypeDetails: any;
  inputValue = new UntypedFormControl();
  filteredLocations: Observable<any[]>;
  selectedLocation: any;
  form: UntypedFormGroup; // Define a form group
  latitude: any;
  longitude: any;

  skills: any[] = [];
  vmedoPartnerID: any;

  cityNames:any[] = [];


  partnerID: any;
  partnerCities: any;
  listView: boolean = false;
  listView2: boolean = true;


  myControl = new FormControl();
 
  filteredOptions: Observable<string[]>;





  defaultService = 'Dvice Value';
  selectedCity: any;

  constructor(private adminservice: ServicesService, private formBuilder: UntypedFormBuilder, public dialogRef: MatDialogRef<AddVmedoPartnerAddressComponent>) {


    this.partnerID = parseInt(sessionStorage.getItem('partnerid'), 10);


    this.filteredLocations = this.inputValue.valueChanges.pipe(
      startWith(''),
      switchMap(value => this._filters(value))
    );

   

    // Initialize the form group and form controls
    this.form = this.formBuilder.group({
      latitude: null, // Initialize latitude form control with null
      longitude: null, // Initialize longitude form control with null
    });
  }

  
  private _filter(value: any): any[] {
    const filterValue = value.toLowerCase();
    console.log(this.cityNames);

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
          // Extract the entire location object from the response
          return response.objrt.predictions;
        }
        return [];
      })
    );
  }

  ngOnInit(): void {

    this.vmedoPartnerID = parseInt(sessionStorage.getItem('vmedoPartnerID'), 10);

    this.adminservice.getVmedoPartnerTypeDetails().subscribe(data => {
      this.PartnerTypeDetails = data;
    });


    this.adminservice.getVmedoPartnerSkillsDetails().subscribe((response) => {
      this.skills = response['objorg'];
      console.log(this.skills)
    });

    this.adminservice.getVmedoPartnerCityDetails().subscribe(data => {
      this.partnerCities = data;
      this.cityNames=this.partnerCities['objorg'].map(city=> city.name);
      // console.log(this.cityNames);


    })

   

  }




  // private _filter(value: string): string[] {
  //   const filterValue = value.toLowerCase();


  //   return this.cityNames.filter(option => option.toLowerCase().includes(filterValue));

  
  // }

  optionSelected(location: any) {
    // You can access the selected location directly
    this.selectedLocation = location;

    // Now you can use the selectedLocation to get the place_id and make the second API call.
    const placeId = this.selectedLocation.place_id;

    this.adminservice.getLocationDetailsByPlaceId(placeId).subscribe((details: any) => {
      // Handle the response from the second API call.
      console.log(details);


      // Extract latitude and longitude from the API response and set them in the form controls
      this.latitude = details.objret.result.geometry.location.lat;
      this.longitude = details.objret.result.geometry.location.lng;
    });
  }

  optionCitySelected(option: any){
    this.selectedCity = option;
  }

  addVmedoPartnersAddressData(data: any) {
    console.warn(data);

    data.partnerorg_address = this.selectedLocation ? this.selectedLocation.description : '';
    data.partner_city = this.selectedCity;

    this.adminservice.createVmedoPartnerData(data).subscribe((result: any) => {
      console.warn(result);

      if (result.statusCode === 200) {
        this.inputValue.reset();
        this.successNotification();
        this.onClose();
      }
    });

    // Access latitude and longitude from the form group
    console.log('Latitude:', this.form.value.latitude);
    console.log('Longitude:', this.form.value.longitude);

    // ... rest of your code ...
  }

  addVmedoPartnersData(data: any) {
    console.warn(data);



    // data.partnerorg_address = this.selectedLocation ? this.selectedLocation.description : '';

    this.adminservice.addVmedoPartnersData(data).subscribe((result: any) => {
      console.warn(result);

      if (result.statusCode === 200) {
        this.inputValue.reset();
        const partnerid = result.pid;
        sessionStorage.setItem('partnerid', partnerid);
        // this.successNotification();

        this.partnerID = parseInt(sessionStorage.getItem('partnerid'), 10);

      }
    });



  }

  successNotification() {
    Swal.fire('VMEDO Partner Address', 'Added successfully!', 'success');
  }




  @ViewChild('addVmedoPartnerAddressForm') myForm: NgForm;
  saveAndAnotherAddress(data: any) {
    this.adminservice.createVmedoPartnerData(data).subscribe((result: any) => {
      console.warn(result);

      if (result.statusCode === 200) {
        this.inputValue.reset();
        // const partnerid = result.pid; 

        // sessionStorage.setItem('partnerid', partnerid);
        this.partnerID = parseInt(sessionStorage.getItem('partnerid'), 10);

        const savedPartnerID = parseInt(sessionStorage.getItem('partnerid'), 10);

        // Reset the form, excluding the partnerID field
        this.myForm.resetForm({ partner_id: savedPartnerID });
        this.successNotification();
      }

    });
  }

  displayListView() {
    this.listView = true;
    this.listView2 = false;

  }


  onClose() {

    this.dialogRef.close();

  }
}
