import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpResponse, HttpErrorResponse, HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';

@Injectable()
export class TokenExpiredInterceptor implements HttpInterceptor {

    constructor(private router: Router, private http: HttpClient) {
    }

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        const tokenExpireTimestamp = sessionStorage.getItem('AccessTokenExpiry');

        if (tokenExpireTimestamp) {
            const expirationTime = new Date(tokenExpireTimestamp).getTime();

            if (expirationTime < Date.now()) {
                // Token has expired
                Swal.fire({
                    title: 'Session Timeout',
                    text: 'Your session has expired. Please log in again.',
                    icon: 'warning',
                    confirmButtonText: 'OK'
                }).then(() => {
                    // Perform logout logic, such as clearing token and redirecting to login page
                    this.router.navigate(['/admin-login']);
                });

                return throwError('Token expired'); // Signal the error to other interceptors or subscribers
            }
        }

        return next.handle(request);
    }
}
