import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { AuthenticationService } from '../_services/authentication.service';
import Swal from 'sweetalert2';
import { tap } from 'rxjs/operators';
import { Router } from '@angular/router';

@Injectable()
export class JwtInterceptor implements HttpInterceptor {
    constructor(private authenticationService: AuthenticationService,private route: Router) { }

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

        //add auth header with jwt if user is logged in and request is to the api url
        //debugger;
        const currentUser = this.authenticationService.currentUserValue;
        const isLoggedIn = currentUser && currentUser;
        const isApiUrl = request.url.startsWith(environment.baseUrl);
        if (isLoggedIn && isApiUrl) {
            request = request.clone({
                setHeaders: {
                    Authorization:`Bearer ${JSON.parse(sessionStorage.getItem('JWTAdminToken'))}`                    
                }
            });
        }

        return next.handle(request).pipe(
            tap(
              () => {},
              error => {
                if (error && error.message === "ERROR Unknown Error") {
                  // Token expired, perform logout
                  this.handleLogout();
                }
              }
            )
          );
    }


    private handleLogout(): void {
        Swal.fire({
          title: 'Session Timeout',
          text: 'Your session has expired. Please log in again.',
          icon: 'warning',
          confirmButtonText: 'OK'
        }).then(() => {
          // Perform logout logic, such as clearing token and redirecting to login page
          this.route.navigate(['/admin-login']);
        });
      }
}