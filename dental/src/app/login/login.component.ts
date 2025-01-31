import { Component, Inject, inject } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { NgIf } from '@angular/common';
import { Router, RouterLink } from '@angular/router';
import { MatInputModule } from '@angular/material/input';
import { UsersService } from '../services/users.service';
import { CookieService } from 'ngx-cookie-service';
import { jwtDecode } from 'jwt-decode';
import { DoctorService } from '../services/doctor.service';
import { ClinicInfoComponent } from './clinic-info/clinic-info.component';
import Swal from 'sweetalert2';

interface LoginResponse {
  token: string;
}

@Component({
  selector: 'app-login',
  imports: [
    MatFormFieldModule,
    MatButtonModule,
    MatInputModule,
    ReactiveFormsModule,
    NgIf,
    ClinicInfoComponent,
  ],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  private router = inject(Router);
  private users = inject(UsersService);
  private doctorService = inject(DoctorService);

  loginForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(6),
    ]),
  });

  login() {
    if (this.loginForm.invalid) {
      Swal.fire({
        title: 'Notification',
        text: 'Please provide valid credentials!',
        icon: 'info',
        iconColor: 'rgb(3, 108, 95)',
        confirmButtonText: 'Close',
        confirmButtonColor: 'rgb(252, 151, 114)',
        scrollbarPadding: false,
      });
      return;
    }

    this.users.login(this.loginForm.value).subscribe({
      next: (response: LoginResponse) => {
        const token = response.token;

        if (!token || typeof token !== 'string') {
          return;
        }

        localStorage.setItem('token', token);

        try {
          const decodedToken: any = jwtDecode(token);
          const role = decodedToken.role;
          const email = decodedToken.email;

          if (!email) {
            Swal.fire({
              title: 'Notification',
              text: 'Failed to retrieve user email!',
              icon: 'info',
              iconColor: 'rgb(3, 108, 95)',
              confirmButtonText: 'Close',
              confirmButtonColor: 'rgb(252, 151, 114)',
              scrollbarPadding: false,
            });
            return;
          }
          if (role === 'admin') {
            this.router.navigate(['/admin']);
          } else if (role === 'doctor') {
            this.doctorService.getDoctor(email).subscribe({
              next: (doctorData: any) => {
                localStorage.setItem('doctorName', doctorData.name);

                this.router.navigate(['/doctor']);
              },
              error: (err: any) => {
                Swal.fire({
                  title: 'Notification',
                  text: 'Failed to retrieve doctor details!',
                  icon: 'info',
                  iconColor: 'rgb(3, 108, 95)',
                  confirmButtonText: 'Close',
                  confirmButtonColor: 'rgb(252, 151, 114)',
                  scrollbarPadding: false,
                });
              },
            });
          }
        } catch (error) {
          Swal.fire({
            title: 'Notification',
            text: 'Login failed. Invalid token!',
            icon: 'info',
            iconColor: 'rgb(3, 108, 95)',
            confirmButtonText: 'Close',
            confirmButtonColor: 'rgb(252, 151, 114)',
            scrollbarPadding: false,
          });
        }
      },
      error: (err) => {
        Swal.fire({
          title: 'Notification',
          text: 'Login failed. Please try again.!',
          icon: 'info',
          iconColor: 'rgb(3, 108, 95)',
          confirmButtonText: 'Close',
          confirmButtonColor: 'rgb(252, 151, 114)',
          scrollbarPadding: false,
        });
      },
    });
  }
}
