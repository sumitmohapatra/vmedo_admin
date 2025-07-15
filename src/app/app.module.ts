import { APP_INITIALIZER, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AdminmoduleModule } from './adminmodule/adminmodule.module';
import { CommonModule, DatePipe } from '@angular/common';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { AuthGuard } from './authentication-services/_helpers';
import { JwtInterceptor } from './authentication-services/_helpers';
import { ErrorInterceptor } from './authentication-services/_helpers';
import { appInitializer } from './authentication-services/_helpers/app.initializer';
import { AuthenticationService } from './authentication-services/_services';
import { TokenExpiredInterceptor } from './authentication-services/_services/HttpInterceptor';
// import { AgmCoreModule } from '@agm/core';
import { VmedoAdminLoginComponent } from './vmedo-admin-login/vmedo-admin-login.component';
import { VmedoPageNotFoundComponent } from './vmedo-page-not-found/vmedo-page-not-found.component';
import { MatCardModule } from '@angular/material/card';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { VmedoAdminDashboardComponent } from './vmedo-admin-dashboard/vmedo-admin-dashboard.component';
import { MatListModule } from '@angular/material/list';
import { MatGridListModule } from '@angular/material/grid-list';
// import { FlexLayoutModule } from '@angular/flex-layout';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatChipsModule } from '@angular/material/chips';
import { MatSelectModule } from '@angular/material/select';
import { LayoutModule } from '@angular/cdk/layout';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatTableModule } from '@angular/material/table';
import { MatDialogModule } from '@angular/material/dialog';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';
import { MatBadgeModule } from '@angular/material/badge';
import { MatTabsModule } from '@angular/material/tabs';
// import { NgImageFullscreenViewModule } from 'ng-image-fullscreen-view';
import { QRCodeModule } from 'angular2-qrcode';
// import { JustLightboxModule } from 'just-lightbox';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { NgxEditorModule } from 'ngx-editor';
import { GoogleMapsModule } from '@angular/google-maps';


@NgModule({
  declarations: [
    AppComponent,
    VmedoAdminLoginComponent,
    VmedoPageNotFoundComponent,
    VmedoAdminDashboardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    MatCardModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatChipsModule,
    MatIconModule,
    MatFormFieldModule,
    FormsModule,
    MatInputModule,
    MatSelectModule,
    HttpClientModule,
    ReactiveFormsModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatListModule,
    MatGridListModule,
    MatCardModule,
    MatMenuModule,
    MatSlideToggleModule,
    MatTableModule,
    MatDialogModule,
    BrowserAnimationsModule,
    MatPaginatorModule,
    MatSortModule,
    MatTooltipModule,
    // FlexLayoutModule,
    MatCheckboxModule,
    MatBadgeModule,
    MatTabsModule,
    // NgImageFullscreenViewModule,
    // QRCodeModule,
    // JustLightboxModule.forRoot(),
    MatExpansionModule,
    // AgmCoreModule,
    MatAutocompleteModule,
    NgxEditorModule,
    GoogleMapsModule,
    // NgMultiSelectDropDownModule.forRoot(),
    RouterModule.forRoot([
      { path: '', pathMatch: 'full', redirectTo: 'admin-login' },
    ]),
    // AgmCoreModule.forRoot({
    //   apiKey: 'AIzaSyDlT9pt3oqkag3fhoEMVFM14mNxoQ9AZOg',
    //   // apiKey: 'AIzaSyDFaXNvUSNlqQoqlNBgCgppWcSeYxb5kDM'

    // })

  ],
  providers: [AuthGuard, { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
    { provide: APP_INITIALIZER, useFactory: appInitializer, multi: true, deps: [AuthenticationService] },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenExpiredInterceptor,
      multi: true,
    }, DatePipe
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
