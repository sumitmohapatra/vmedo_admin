import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import Swal from 'sweetalert2';

import { AuthenticationService } from '../_services/authentication.service';

@Injectable()
export class ErrorInterceptor implements HttpInterceptor {
    constructor(private authenticationService: AuthenticationService) { }

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        return next.handle(request).pipe(catchError(err => {
            if ([401, 403].includes(err.status) && this.authenticationService.currentUserValue) {
                // Auto logout if 401 or 403 response returned from the API
                this.authenticationService.logout();
            }

            if (err.status === 404) {
                // Handle 404 error
                Swal.fire({
                    icon: 'error',
                    title: 'Error 404 - Not Found',
                    text: 'The requested resource was not found.',
                });
            } 
            else if (err.status === 400) {
                // Handle 500 and 502 errors
                Swal.fire({
                    icon: 'error',
                    title: 'Bad request',
                    text: 'Your request is invalid. Please check your input and try again.',
                });
            }

            else if ([500, 502].includes(err.status)) {
                // Handle 500 and 502 errors
                Swal.fire({
                    icon: 'error',
                    title: 'Server Error',
                    text: 'An internal server error occurred. Please try again later.',
                });
            } else {
                // Handle other HTTP request errors (e.g., network issues)
                console.error(err);
            }

            return throwError(err);
        }))
    }
}
