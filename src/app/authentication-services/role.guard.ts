import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class RoleGuard  {


 constructor(private router: Router) {}


 canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree {
    const expectedRole = route.data.expectedRole; // You can define expected roles in your route configuration
    const userRole = sessionStorage.getItem('role'); // Get the user's role from local storage

    console.log(userRole);
    

   if (userRole && userRole === expectedRole) {
   
      return true; // User has the required role, allow access
    } else {
      // Redirect to a forbidden page or show an error message
    
      return this.router.parseUrl('/**');
      
    }

  }
}