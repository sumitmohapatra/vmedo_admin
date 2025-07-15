import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { SearchVmedoPartner } from './searchVmedoPartnerDetails';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { ServicesService } from 'src/app/adminservice/services.service';
import { ngxCsv } from 'ngx-csv';
import { Router } from '@angular/router';
import { UntypedFormBuilder, UntypedFormControl, UntypedFormGroup, NgForm } from '@angular/forms';
import { Observable, Subject } from 'rxjs';
import { map, startWith, switchMap } from 'rxjs/operators';
import Swal from 'sweetalert2';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { VmedoPartnerDetailsComponent } from '../vmedo-partner-details/vmedo-partner-details.component';
import * as geolib from 'geolib';
import { MapInfoWindow } from '@angular/google-maps';
// import { AgmInfoWindow } from '@agm/core';
// import { MapsAPILoader } from '@agm/core';

interface Range {
  value: number;
  viewValue: string;
}

@Component({
  selector: 'app-search-vmedo-partner',
  templateUrl: './search-vmedo-partner.component.html',
  styleUrls: ['./search-vmedo-partner.component.css']
})

export class SearchVmedoPartnerComponent implements AfterViewInit {

  @ViewChild('searchVmedoPartnerForm') searchVmedoPartnerForm: NgForm;
  
  element: any = {};
  userRole: any;
  id: any;
  PartnerTypeDetails: any;
  inputValue = new UntypedFormControl();
  filteredLocations: Observable<any[]>;
  selectedLocation: any;
  form: UntypedFormGroup;
  latitude: any;
  longitude: any;
  sourceLatitude: any;
  sourceLongitude: any;
  sourceLocationIcon: string = 'assets/Images/vmedo_hospital_icon.png';
  listView: boolean = false;
  mapView: boolean = false;
  sourceRange: any;
  search_Range: number = 10;

  @ViewChild('submitButton') submitButton: ElementRef;

  lat: number = 12.90643448643134
  lng: number = 77.57510193683285;
  zoom: number = 12;
  center = { lat: 12.90643448643134, lng: 77.57510193683285};
  marker:any;
  locations: any[] = [];
  selectedMarker: any = null;

  // private currentlyOpenInfoWindow: AgmInfoWindow | null = null;

  displayedColumns: String[] = ['id','partner_typeID', 'partnerorg_name',
    'partnerorg_primaryphone', 'partnerorg_secondaryphone',
    'partner_status', 'partner_distance', 'partnerorg_address', 'actions'];

  public dataSource = new MatTableDataSource<SearchVmedoPartner>();
  @ViewChild('mapContainer', { static: true }) mapElement!: ElementRef;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  map!: google.maps.Map;

  constructor(private adminservice: ServicesService, private route: Router,
    private formBuilder: UntypedFormBuilder, private dialog: MatDialog)
    
    {

    this.filteredLocations = this.inputValue.valueChanges.pipe(
      startWith(''),
      switchMap(value => this._filter(value))
    );

    this.form = this.formBuilder.group({
      latitude: null,
      longitude: null,
    });

  }

  displayListView() {
    this.listView = !this.listView;
    this.mapView = false;
  }

  displayMapView() {
    this.mapView = !this.mapView;
    this.listView = false;
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

  ngOnInit(): void {
    this.userRole = JSON.parse(sessionStorage.getItem('role'));
    this.adminservice.getVmedoPartnerTypeDetails().subscribe(data => {
      this.PartnerTypeDetails = data;
    });
  }

  selectedValue: number = 10;
  selectedCar: string;

  ranges: Range[] = [
    { value: 5, viewValue: '5km' },
    { value: 10, viewValue: '10km' },
    { value: 15, viewValue: '15km' },
    { value: 20, viewValue: '20km' },
  ];

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  ngOnDestroy() {
    if (this.id) {
      clearInterval(this.id);
    }
  }

  getVmedoPartnersDetails() {
    this.adminservice.GetVmedoPartnerDetails().subscribe(x => {
      this.dataSource.data = x['objorg'] as SearchVmedoPartner[];
    });
  }

  getIconUrl(partnerStatus: number, partnerTypeId: number): string {
    if (partnerTypeId === 1) {
      if (partnerStatus === 1) {
        return 'assets/Partner-Icons/registered-hospital.png';
      } else if (partnerStatus === 2) {
        return 'assets/Partner-Icons/unregistered-hospital.png';
      }
    } else if (partnerTypeId === 2) {
      if (partnerStatus === 1) {
        return 'assets/Partner-Icons/registered-lab.png.png';
      } else if (partnerStatus === 2) {
        return 'assets/Partner-Icons/unregistered-lab.png.png';
      }
    }
    // Add more cases for different partnerTypeId values as needed
    else if (partnerTypeId === 3) {
      if (partnerStatus === 1) {
        return 'assets/Partner-Icons/registered-ambulance.png';
      } else if (partnerStatus === 2) {
        return 'assets/Partner-Icons/unregistered-ambulance.png';
      }
    }
    // Add more cases for different partnerTypeId values as needed
    else if (partnerTypeId === 4) {
      if (partnerStatus === 1) {
        return 'assets/Partner-Icons/registered-home-healthcare-icon.png';
      } else if (partnerStatus === 2) {
        return 'assets/Partner-Icons/unregistered-home-healthcare-icon.png';
      }
    }
    // Add more cases for different partnerTypeId values as needed

    // You can also provide a default icon URL if no condition matches.
    return 'assets/default-icon.png';
  }

  onRadiusChange(newRadius: number) {
    let radiusInKm = newRadius / 1000;
    let updatedRadius = Math.floor(radiusInKm);
    console.log('Radius', updatedRadius);
    this.search_Range = updatedRadius;
    this.searchVmedoPartnerForm.value.latitude = this.sourceLatitude;
    this.searchVmedoPartnerForm.value.longitude = this.sourceLongitude;
    this.searchVmedoPartnerForm.value.search_Range = updatedRadius;
    this.searchVmedoPartnerFormData(this.searchVmedoPartnerForm.value);
  }

  public doFilter = (value: string) => {
    this.dataSource.filter = value.trim().toLocaleLowerCase();
  }

  onEditVmedoPartner(partnerID: any) {
    sessionStorage.setItem("vmedoPartnerID", JSON.stringify(partnerID));
    this.route.navigate(["/admindashboard/vmedo-partner/edit-partner"]);
  }

  fileDownload() {
    var options = {
      fieldSeparator: ',',
      quoteStrings: '"',
      decimalseparator: '.',
      showLabels: true,
      showTitle: true,
      title: 'Exported Data',
      useBom: true,
    };

    new ngxCsv(this.dataSource.data, "Exported Data", options);
  }

  searchVmedoPartnerFormData(data: any) {
    console.log(data);

    this.mapView = true;
    if (this.listView === true) {
      this.mapView = false;
    }

    this.adminservice.searchVmedoPartnerData(data).subscribe((result: any) => {
      if (result.statusCode === 404 && result.message === "No Data Found") {
        this.dataSource.data = [];
        this.listView = false;
        this.mapView = false;
        Swal.fire('Oops!', 'No records found', 'warning');
      } else {
        this.sourceLatitude = data.latitude;
        this.sourceLongitude = data.longitude;
        this.sourceRange = data.search_Range;

        console.warn(result);
        this.dataSource.data = result['objorg'] as SearchVmedoPartner[];

        this.locations = result.objorg.map((item: any) => ({
          
          latitude: item.latitude,
          longitude: item.longitude,
          partnerType: item.partner_type,
          partnerTypeId: item.partner_typeID,
          partnerStatus: item.partner_status,
          name: item.partnerorg_name,
          primaryPhone: item.partnerorg_primaryphone,
          secondaryPhone: item.partnerorg_secondaryphone,
          email: item.partnerorg_email,
          services: item.partnerorg_services,
          address: item.partnerorg_address,
          distance: item.partner_distance,
          position: {
            lat: item.latitude,
            lng: item.longitude
          },
          label: item.partnerorg_name

        }));

        

        if (this.locations.length > 0) {
          this.initMap();
          // this.lat = this.locations[0].latitude;
          // this.lng = this.locations[0].longitude;
          // this.center = { lat: this.locations[0].latitude, lng: this.locations[0].longitude };
          // this.marker = {
          //   position:this.locations[0].position,
          //   label: this.locations[0].label,
          // }
        }
      }
    });
  }

  
  initMap(): void {
    this.map = new google.maps.Map(this.mapElement.nativeElement, {
      center: { lat: this.locations[0].latitude, lng: this.locations[0].longitude },
      zoom: 12,
      mapId: 'YOUR_MAP_ID_HERE' 
    });

    this.locations.forEach((location) => {
      const position = new google.maps.LatLng(location.latitude, location.longitude);

      const marker = new google.maps.marker.AdvancedMarkerElement({
        map: this.map,
        position: position,
        title: location.name,
      });

      marker.addListener('gmp-click', () => {
        const roundedDistance = location.distance.toFixed(2); // 2 decimals
        const statusText = location.partnerStatus === 1 ? 'Registered' : 'Unregistered';
        const statusColor = location.partnerStatus === 1 ? 'green' : 'red';
        const infoWindow = new google.maps.InfoWindow({
          // content: `<strong>${location.name}</strong><br/>📍 ${location.address}`,
          content: ` <div style="font-family: Arial; font-size: 14px; max-width: 250px;">
              <div style="font-weight: bold;">${location.name} - (${roundedDistance} Km)</div>
              <div style="color: ${statusColor}; margin-bottom: 5px;">${statusText}</div>
              <div><strong>Primary Phone</strong> - ${location.primaryPhone}</div>
              <div><strong>Secondary Phone</strong> - ${location.secondaryPhone}</div>
              <div><strong>Email</strong> - ${location.email}</div>
              <div><strong>Services</strong> - ${location.services}</div>
            </div>`,
        });
        infoWindow.open(this.map, marker);
      });

      
    });
  }


  // agmWindow(infoWindow: AgmInfoWindow) {
  //   if (this.currentlyOpenInfoWindow) {
  //     this.currentlyOpenInfoWindow.close();
  //   }
  //   infoWindow.open();
  //   this.currentlyOpenInfoWindow = infoWindow;
  // }

  getVmedoPartnerDetails(partnerID: any) {
    sessionStorage.setItem("vmedoPartnerID", JSON.stringify(partnerID));
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = "45%";
    dialogConfig.height = "85%";
    this.dialog.open(VmedoPartnerDetailsComponent, dialogConfig);
  }

  

  clear() {
    Swal.fire({
      title: 'Confirmation',
      text: 'Are you sure you want to clear the records?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, clear it!'
    }).then((result) => {
      if (result.isConfirmed) {
        this.searchVmedoPartnerForm.resetForm();
        this.inputValue.reset();
        this.search_Range = 10;
        this.selectedValue = 10;
        this.dataSource.data = [];
        this.listView = false;
        this.mapView = false;
      }
    });
  }
}
