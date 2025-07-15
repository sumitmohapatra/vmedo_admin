import { Component } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { first } from 'rxjs/operators';
import { ServicesService } from 'src/app/adminservice/services.service';
import Swal from 'sweetalert2';
import { AuthenticationService } from 'src/app/authentication-services/_services';
import { UserService } from 'src/app/authentication-services/_services';

@Component({
  selector: 'app-vmedo-admin-login',
  templateUrl: './vmedo-admin-login.component.html',
  styleUrls: ['./vmedo-admin-login.component.css']
})
export class VmedoAdminLoginComponent {

  loginForm: UntypedFormGroup;
  loading = false;
  submitted = false;
  error = '';

  constructor(
    private adminService: ServicesService,
    private router: Router,
    private formBuilder: UntypedFormBuilder,
    private route: ActivatedRoute,
    private authenticationService: AuthenticationService,
    private userService: UserService
  ) {}

  ngOnInit(): void {
    sessionStorage.clear();

    this.loginForm = this.formBuilder.group({
      userCredential: ['', Validators.required],
      userPassword: ['', Validators.required]
    });
  }

  // convenience getter for easy access to form fields
  get f() { return this.loginForm.controls; }

  onSubmit() {
    this.submitted = true;

    // Stop here if the form is invalid
    if (this.loginForm.invalid) {
      return;
    }

    this.loading = true;
    this.authenticationService.login(this.f.userCredential.value, this.f.userPassword.value)
      .pipe(first())
      .subscribe({
        next: (response) => {
          if (response.statusCode === 200) {
            // Assuming the response body contains the user ID and role
            const adminId = response.objret.userID;
            const role = response.objret.role;

            // Store the user ID and role in local storage
            sessionStorage.setItem('adminId', adminId);
            sessionStorage.setItem('role', role);

            this.userService.setRole(role);

            // Redirect based on the role
            switch (role) {
              case 1:
                this.router.navigate(['/admin-dashboard/vmedo-admin-module/dashboard']);
                break;

              case 2:
                this.router.navigate(['/admin-dashboard/vmedo-subscribers-module/subscribers']);
                break;

              case 3:
                this.router.navigate(['/admin-dashboard/vmedo-hospitals-module/hospitallist/registeredhospital']);
                break;

              default:
                // Handle other roles or unexpected values
                break;
            }
          } else {
            // Handle login error
            this.error = response.errorMessage;
            this.loading = false;
          }
        },
        error: (error) => {
          this.successNotification();
          // this.error = error;
          this.loading = false;
        }
      });
  }

  successNotification() {
    Swal.fire({
      icon: 'error',
      title: 'Oops...',
      text: 'Invalid credentials!',
    });
  }

  adminLoginData(data: any) {
    this.adminService.adminLogin(data).subscribe((result: any) => {
      if (result.statusCode === 200) {
        this.router.navigate(['/admin-dashboard']);
        sessionStorage.setItem("adminID", JSON.stringify(result.objret.userID));
      }

      if (result.statusCode === 500) {
        this.successNotification();
      }
    });
    // this.route.navigate(["/admindashboard/dashboard"]);
  }
}
