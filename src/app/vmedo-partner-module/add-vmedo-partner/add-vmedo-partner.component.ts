import { Component, OnInit } from '@angular/core';
import { UntypedFormBuilder, UntypedFormControl, UntypedFormGroup } from '@angular/forms';
import { Observable } from 'rxjs';
import { map, startWith, switchMap } from 'rxjs/operators';
import { ServicesService } from 'src/app/adminservice/services.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-add-vmedo-partner',
  templateUrl: './add-vmedo-partner.component.html',
  styleUrls: ['./add-vmedo-partner.component.css']
})
export class AddVmedoPartnerComponent implements OnInit {
  partnerTypeDetails: any;
  inputValue = new UntypedFormControl();
  filteredLocations: Observable<any[]>;
  selectedLocation: any;
  form: UntypedFormGroup;

  latitude: any;
  longitude: any;

  constructor(private adminservice: ServicesService, private formBuilder: UntypedFormBuilder) {
    this.filteredLocations = this.inputValue.valueChanges.pipe(
      startWith(''),
      switchMap(value => this._filter(value))
    );

    // Initialize the form group and form controls
    this.form = this.formBuilder.group({
      latitude: null,
      longitude: null,
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

    this.adminservice.getLocationDetailsByPlaceId(placeId).subscribe(
      (details: any) => {
        this.latitude = details.objret.result.geometry.location.lat;
        this.longitude = details.objret.result.geometry.location.lng;
      },
      error => {
        console.error('Error fetching location details:', error);
        // Handle error, show notification, or take appropriate action
      }
    );
  }

  addVmedoPartnersData(data: any) {
    data.partnerorg_address = this.selectedLocation ? this.selectedLocation.description : '';

    this.adminservice.addVmedoPartnersData(data).subscribe(
      (result: any) => {
        if (result.statusCode === 200) {
          this.inputValue.reset();
          this.successNotification();
        }
      },
      error => {
        console.error('Error adding VMEDO partner:', error);
        // Handle error, show notification, or take appropriate action
      }
    );

    console.log('Latitude:', this.form.value.latitude);
    console.log('Longitude:', this.form.value.longitude);
  }

  successNotification() {
    Swal.fire('VMEDO Partner', 'Created successfully!', 'success');
  }

  ngOnInit(): void {
    this.adminservice.getVmedoPartnerTypeDetails().subscribe(data => {
      this.partnerTypeDetails = data;
    });
  }
}
