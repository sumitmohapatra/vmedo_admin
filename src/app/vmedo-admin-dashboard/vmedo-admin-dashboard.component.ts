import { Component } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { Router, RouteConfigLoadStart, RouteConfigLoadEnd, RouterEvent, NavigationStart, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-vmedo-admin-dashboard',
  templateUrl: './vmedo-admin-dashboard.component.html',
  styleUrls: ['./vmedo-admin-dashboard.component.css']
})
export class VmedoAdminDashboardComponent {

  loading: boolean;
  userRole:any;
  sessionTimestamp: any;

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
  .pipe(
    map(result => result.matches),
    shareReplay()
  );
  

  constructor(private breakpointObserver: BreakpointObserver,private router: Router,  ) { 
    this.loading = false;
    
    router.events.subscribe(
      (event: any): any => {
        if (event instanceof NavigationStart) {
          this.loading = true;
        } else if (event instanceof NavigationEnd) {
          this.loading = false;
        }
      }
    );
    
  }

  isCurrentRoute(route: string): boolean {
    return this.router.url === route;
  }

  isCurrentModule(route: string): boolean {
    return this.router.url.includes(route);
  }

  ngOnInit(): void {

   this.userRole= JSON.parse(sessionStorage.getItem('role'));
   this.sessionTimestamp = sessionStorage.getItem('AccessTokenExpiry');
   this.sessionTimestamp = this.sessionTimestamp.replace(/^"(.*)"$/, '$1');
  
  }


}
