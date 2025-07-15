import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormControl, UntypedFormBuilder, UntypedFormControl, UntypedFormGroup } from '@angular/forms';
import { MatChipInputEvent } from '@angular/material/chips';
import { MatDialogRef } from '@angular/material/dialog';
import { Observable } from 'rxjs';
import { map, startWith, switchMap } from 'rxjs/operators';
import { ServicesService } from 'src/app/adminservice/services.service';
import Swal from 'sweetalert2';
import { COMMA, ENTER } from '@angular/cdk/keycodes';
import { MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';

interface Status {
  value: number;
  viewValue: string;
}

@Component({
  selector: 'app-edit-partner-details',
  templateUrl: './edit-partner-details.component.html',
  styleUrls: ['./edit-partner-details.component.css']
})
export class EditPartnerDetailsComponent implements OnInit {

  partnerDetails: any;
  PartnerTypeID: any;
  partnerTypeListData: any;
  inputValue = new UntypedFormControl();
  filteredLocations: Observable<any[]>;
  selectedLocation: any;
  form: UntypedFormGroup; // Define a form group
  latitude: any;
  longitude: any;
  partnerStatus: any;
  partnerSkills: any;
  selectedSkills: number[] = [];
  skills: any[] = [];
  PartnerID: any;
  defaultService = 'Services';
  responseData: any;

  constructor(private adminservice: ServicesService, private formBuilder: UntypedFormBuilder, public dialogRef: MatDialogRef<EditPartnerDetailsComponent>) {
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

  status: Status[] = [
    { value: 1, viewValue: 'Registered' },
    { value: 2, viewValue: 'Unregistered' },
    { value: 3, viewValue: 'Blocked' },
  ];

  ngOnInit(): void {
    this.editVmedoPartnerDetails();

    this.adminservice.getVmedoPartnerDataById().subscribe(data => {
      this.PartnerID = data['objorg']['id'];
      this.PartnerTypeID = data['objorg']['partner_typeID'];
      this.partnerStatus = data['objorg']['partner_status'];
      this.partnerSkills = data['objorg']['partner_skills'].map(skill => skill.id);
    });

    this.adminservice.getVmedoPartnerSkillsDetails().subscribe((response) => {
      this.skills = response['objorg'];
    });

    this.adminservice.getVmedoPartnerTypeDetails().subscribe(data => {
      this.partnerTypeListData = data['objorg'];
      this.PartnerTypeID = this.partnerTypeListData.filter(m => m.id == this.PartnerTypeID).
        map(a => a.id);
      this.PartnerTypeID = Number(this.PartnerTypeID);
    });
  }

  skillNames: string[] = [];

  compareSkills(id1: number, id2: number) {
    return id1 === id2;
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
      }
    });
  }

  editVmedoPartnersData(data: any) {
    data.partnerorg_address = this.selectedLocation ? this.selectedLocation.description : this.partnerDetails.partnerorg_address;

    this.adminservice.editVmedoPartnersData(data).subscribe((result: any) => {
      if (result.statusCode === 200) {
        this.onClose();
        this.inputValue.reset();
        this.successNotification();
      }
    });
  }

  successNotification() {
    Swal.fire('Partner Details', 'Edited successfully!', 'success');
  }

  onClose() {
    this.dialogRef.close();
  }
}
