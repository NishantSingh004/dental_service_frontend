import { CommonModule, NgIf } from '@angular/common';
import { ChangeDetectorRef, Component, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { AppointmentService } from '../services/appointment.service';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import Swal from 'sweetalert2';

interface Role {
  value: string;
  viewValue: string;
}

import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { DoctorService } from '../services/doctor.service';

@Component({
  selector: 'app-doctors-list',
  imports: [
    MatIconModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    NgIf,
    MatSelectModule,
    MatDatepickerModule,
    MatNativeDateModule,
  ],
  templateUrl: './add-doctor.component.html',
  styleUrl: './add-doctor.component.css',
})
export class AddDoctorsComponent {
  Roles: Role[] = [
    { value: 'general Dentist', viewValue: 'General Dentist' },
    { value: 'orthodontist', viewValue: 'Orthodontist' },
    { value: 'periodontist', viewValue: 'Periodontist' },
    { value: 'endodontist', viewValue: 'Endodontist' },
    {
      value: 'Oral and Maxillofacial Surgeon',
      viewValue: 'Oral and Maxillofacial Surgeon',
    },
    { value: 'prosthodontist', viewValue: 'Prosthodontist' },
    { value: 'pediatric Dentist', viewValue: 'Pediatric Dentist' },
    { value: 'oralPathologist', viewValue: 'Oral Pathologist' },
    { value: 'oralRadiologist', viewValue: 'Oral Radiologist' },
    {
      value: 'public Health Dentist',
      viewValue: 'Dental Public Health Specialist',
    },
    { value: 'cosmetic Dentist', viewValue: 'Cosmetic Dentist' },
  ];

  private doctorService = inject(DoctorService);
  isBooked = false;

  doctors = new FormGroup({
    name: new FormControl('', [Validators.required]),
    phone: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required, Validators.email]),
    role: new FormControl('', {
      validators: [Validators.required],
    }),
  });

  addDoctor() {
    if (this.doctors.invalid) {
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

    this.doctorService.addDoctors(this.doctors.value).subscribe({
      next: (res: any) => {
        if (!res.error) {
          Swal.fire({
            title: 'Notification',
            text: 'Doctor added successfully!',
            icon: 'info',
            iconColor: 'rgb(3, 108, 95)',
            confirmButtonText: 'Close',
            confirmButtonColor: 'rgb(252, 151, 114)',
            scrollbarPadding: false,
          });
        }
      },
    });
    this.doctors.reset();

    this.isBooked = true;
  }
}
