import { Component, inject } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { NgIf } from '@angular/common';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { RouterLink } from '@angular/router';
import { MatFormFieldModule } from '@angular/material/form-field';
import { InfoSectionComponent } from '../landing page/info-section/info-section.component';
import { FeaturesComponent } from '../landing page/features/features.component';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { AppointmentService } from '../services/appointment.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-appointment',
  imports: [
    MatIconModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    NgIf,
    InfoSectionComponent,
    FeaturesComponent,
    MatDatepickerModule,
    MatNativeDateModule,
  ],
  templateUrl: './appointment.component.html',
  styleUrl: './appointment.component.css',
})
export class AppointmentComponent {
  private appointmentService = inject(AppointmentService);
  isBooked = false;

  minDate = new Date(1960, 0, 1);
  maxDate = new Date(2030, 11, 31);

  appointment = new FormGroup({
    name: new FormControl('', [Validators.required]),
    phone: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required, Validators.email]),
    dob: new FormControl('', [Validators.required]),
    date: new FormControl('', [Validators.required]),
    message: new FormControl('', [Validators.required]),
  });

  createAppointment() {
    if (this.appointment.invalid) {
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
    this.appointmentService
      .createAppointment(this.appointment.value)
      .subscribe({
        next: (res: any) => {
          if (!res.error) {
            this.appointmentService.appointmentSet = res.response;
            localStorage.setItem('appointment', JSON.stringify(res.response));
            Swal.fire({
              title: 'Notification',
              text: 'Appointment booked successfully!',
              icon: 'info',
              iconColor: 'rgb(3, 108, 95)',
              confirmButtonText: 'Close',
              confirmButtonColor: 'rgb(252, 151, 114)',
              scrollbarPadding: false,
            });
          }
        },
      });
    this.appointment.reset();

    this.isBooked = true;
  }
}
