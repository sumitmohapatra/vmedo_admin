import { Component } from '@angular/core';

@Component({
  selector: 'app-vmedo-page-not-found',
  templateUrl: './vmedo-page-not-found.component.html',
  styleUrls: ['./vmedo-page-not-found.component.css']
})
export class VmedoPageNotFoundComponent {
  userRole: any;
  ngOnInit(): void {

    this.userRole= JSON.parse(sessionStorage.getItem('role'));
    
   
   }

   
}
