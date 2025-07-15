import { Component, OnInit, OnDestroy } from '@angular/core';
import { interval, Subscription } from 'rxjs';
import { ServicesService } from 'src/app/adminservice/services.service';
import { catchError, finalize } from 'rxjs/operators';
import { throwError } from 'rxjs';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit, OnDestroy {
  counter = interval(5000); // sets time interval
  subscription: Subscription | null = null;
  dashboardData: any;
  id: any;

  constructor(private adminservice: ServicesService) {
    this.getDashboardData();
    this.id = setInterval(() => {
      this.getDashboardData(); 
    }, 5000);

    // Uncomment and adapt the following lines if needed
    // this.subscription = this.counter.subscribe(() => {
    //   this.loadDashboardData();
    // });
  }

  ngOnInit(): void {}

  getDashboardData() {
    this.adminservice.GetDashboardData().pipe(
      catchError((error) => {
        console.error('Error loading dashboard data:', error);
        return throwError(error);
      }),
      finalize(() => {
        // Perform any finalization logic, e.g., hide loading spinner
        // This block will be executed whether the request is successful or not
        // Consider using loading flags or spinners in the UI
      })
    ).subscribe((data) => {
      this.dashboardData = data['objret'];
    });
  }

  ngOnDestroy() {
    if (this.id) {
      clearInterval(this.id);
    }
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }
}
