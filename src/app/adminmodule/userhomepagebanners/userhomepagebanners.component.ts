import { Component, OnInit, ViewChild, OnDestroy } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { interval, Observable, Subscription } from 'rxjs';
import { ServicesService } from 'src/app/adminservice/services.service';
import { bannerProperties } from './bannerProperties';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { BreakpointObserver } from '@angular/cdk/layout';
import { HospitalProperties } from '../../vmedo-hospitals-module/hospitallist/hospitalProperties';
import Swal from 'sweetalert2';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-userhomepagebanners',
  templateUrl: './userhomepagebanners.component.html',
  styleUrls: ['./userhomepagebanners.component.css']
})
export class UserhomepagebannersComponent implements OnInit, OnDestroy {

  id: any;
  counter = interval(5000); // sets time interval
  subscription: Subscription | null = null;

  displayedColumns = ['bimage', 'description', 'url', 'uploaded_on', 'actions'];
  public dataSource = new MatTableDataSource<bannerProperties>();

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  reviewData: any;

  myFiles: string[] = [];
  sMsg: any = '';
  bannerImageData: any;
  currentDate = new Date();
  today: Date;

  isShow = false;
  HospitalID: any;
  images: string[] = [];
  myForm: any;

  constructor(private httpService: HttpClient, private adminservice: ServicesService, private http: HttpClient) {
    this.getHomePageBanners();
    this.id = setInterval(() => {
      this.getHomePageBanners();
    }, 5000);
  }

  ngOnInit(): void {
    this.HospitalID = JSON.parse(sessionStorage.getItem('hospitalID'));
    this.today = new Date();
    this.subscription = this.counter.subscribe(f => {
      this.loadBannerData();
    });
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  ngOnDestroy() {
    if (this.id) {
      clearInterval(this.id);
    }
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }

  getFileDetails(e) {
    for (var i = 0; i < e.target.files.length; i++) {
      this.myFiles.push(e.target.files[i]);
    }
  }

  bannerImagesData(data: any) {
    const frmData = new FormData();
    var obj = JSON.stringify(data);
    frmData.append('MyObj', obj);
    for (var i = 0; i < this.myFiles.length; i++) {
      frmData.append("File", this.myFiles[i]);
    }

    this.httpService.post(`${environment.baseUrl}vadmin/Addsitebanner`, frmData).subscribe(
      data => {
        this.sMsg = data;
        if (this.sMsg.statusCode === 200) {
          this.successNotification();
          this.ngOnInit();
        }
      },
      (err: HttpErrorResponse) => {
        console.log(err.message);
      }
    );
  }

  toggleDisplay() {
    this.isShow = !this.isShow;
  }

  getHomePageBanners() {
    this.adminservice.getBannerImagesData().subscribe(x => {
      this.dataSource.data = x['objspl'] as bannerProperties[];
    });
  }

  public doFilter = (value: string) => {
    this.dataSource.filter = value.trim().toLocaleLowerCase();
  }

  onDeleteBannerImage(bannerImageId: any) {
    sessionStorage.setItem("bannerImageID", JSON.stringify(bannerImageId));

    this.adminservice.deleteBannerImage().subscribe(data => {
      this.bannerImageData = data;
      if (this.bannerImageData.statusCode === 200) {
        this.deleteBannerImageNotification();
        this.ngOnInit();
      }
    });
  }

  private loadBannerData() {
    this.adminservice.getBannerImagesData().subscribe(x => {
      this.dataSource.data = x['objspl'] as bannerProperties[];
    });
  }

  successNotification() {
    Swal.fire('Homepage banner', 'Image added successfully!', 'success');
  }

  deleteBannerImageNotification() {
    Swal.fire('Homepage banner', 'Image deleted successfully!', 'success');
  }
}
