import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { User } from '../_models/user';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Injectable({ providedIn: 'root' })
export class AuthenticationService {
    private currentUserSubject: BehaviorSubject<User>;
    public currentUser: Observable<User>;

    constructor(private router: Router, private http: HttpClient) {
        this.currentUserSubject = new BehaviorSubject<User>(JSON.parse(sessionStorage.getItem('JWTAdminToken')));
        this.currentUser = this.currentUserSubject.asObservable();
    }

    public get currentUserValue(): User {
        return this.currentUserSubject.value;
    }

    login(userCredential: string, userPassword: string) {
        return this.http.post<any>(`${environment.baseUrl}auth/Adminauthentication`, { userCredential, userPassword })
            .pipe(map(user => {
                // store user details and jwt token in local storage to keep user logged in between page refreshes
                sessionStorage.setItem('JWTAdminToken', JSON.stringify(user.objret.autToken));
                 sessionStorage.setItem('AccessTokenExpiry',JSON.stringify(user.objret.accessTokenExpire))

                const storedTimestampString = sessionStorage.getItem('AccessTokenExpiry');
                const storedTimestamp = new Date(storedTimestampString);

                this.currentUserSubject.next(user);
                //   debugger;
                return user;
            }));
    }

    logout() {
        // remove user from local storage to log user out
        sessionStorage.removeItem('JWTAdminToken');
        this.currentUserSubject.next(null);
    }

    // refreshToken() {
    //     return this.http.post<any>(`${environment.baseUrl}auth/RefreshToken`, {}, { withCredentials: true })
    //         .pipe(map((user) => {
    //             this.currentUserSubject.next(user);
    //             this.startRefreshTokenTimer();
    //             return user;
    //         }));
    // }

    refreshToken() {
        return this.http.post<any>(`${environment.baseUrl}auth/RefreshToken`, {}, { withCredentials: true })
          .pipe(map((user) => {
            this.currentUserSubject.next(user);
            this.startRefreshTokenTimer();
            return user;
          }),
          catchError((error) => {


           //  this.handleLogout();
            throw error;
          }));
      }
      
      private handleLogout(): void {
        Swal.fire({
          title: 'Session Timeout',
          text: 'Your session has expired. Please log in again.',
          icon: 'warning',
          confirmButtonText: 'OK'
        }).then(() => {
          // Perform logout logic, such as clearing token and redirecting to login page
          this.router.navigate(['/admin-login']);
        });
      }
      

    // helper methods

    private refreshTokenTimeout;

    private startRefreshTokenTimer() {
        // parse json object from base64 encoded jwt token
        const jwtToken = JSON.parse(atob(this.currentUserValue.autToken.split('.')[1]));

        // set a timeout to refresh the token a minute before it expires
        const expires = new Date(jwtToken.exp * 1000);
        const timeout = expires.getTime() - Date.now() - (60 * 1000);
        this.refreshTokenTimeout = setTimeout(() => this.refreshToken().subscribe(), timeout);
    }

    private stopRefreshTokenTimer() {
        clearTimeout(this.refreshTokenTimeout);
    }


}