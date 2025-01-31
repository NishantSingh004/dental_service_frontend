import { NgIf } from '@angular/common';
import { Component, Inject, inject, OnInit } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { Router, RouterLink } from '@angular/router';
import { MatSelectModule } from '@angular/material/select';
import { UsersService } from '../services/users.service';
import Swal from 'sweetalert2';

interface Role {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-add-users',
  imports: [
    MatFormFieldModule,
    MatButtonModule,
    MatInputModule,
    ReactiveFormsModule,
    NgIf,
    MatSelectModule,
  ],
  templateUrl: './add-users.component.html',
  styleUrl: './add-users.component.css',
})
export class AddUsersComponent implements OnInit {
  private user = inject(UsersService);
  Roles: Role[] = [
    { value: 'admin', viewValue: 'Admin' },
    { value: 'doctor', viewValue: 'Doctor' },
  ];

  private router = inject(Router);
  createUser!: FormGroup;
  ngOnInit(): void {
    this.createUser = new FormGroup({
      email: new FormControl('', {
        validators: [Validators.required, Validators.email],
      }),
      password: new FormControl('', {
        validators: [Validators.required, Validators.minLength(6)],
      }),
      role: new FormControl('', {
        validators: [Validators.required],
      }),
    });
  }
  creations = false;
  create() {
    if (this.createUser.invalid) {
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

    this.user.createAccount(this.createUser.value).subscribe({
      next: (res: any) => {
        if (!res.error) {
          this.user.user = res.response;
          localStorage.setItem('user', JSON.stringify(res.response));
          Swal.fire({
            title: 'Notification',
            text: 'User added successfully!',
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
          text: 'An error occurred. Please try again later!',
          icon: 'info',
          iconColor: 'rgb(3, 108, 95)',
          confirmButtonText: 'Close',
          confirmButtonColor: 'rgb(252, 151, 114)',
          scrollbarPadding: false,
        });
      },
    });
    this.creations = true;
    this.createUser.reset();
  }
}
