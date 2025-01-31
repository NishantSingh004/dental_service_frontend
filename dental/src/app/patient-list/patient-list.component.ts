import { CommonModule } from '@angular/common';
import { ChangeDetectorRef, Component, inject, OnInit } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';
import { AppointmentService } from '../services/appointment.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

interface Appointmnets {
  _id: string;
  name: string;
  phone: string;
  email: string;
  dob: string;
  date: string;
  message: string;
  appointmentid: string;
  __v: number;
}

@Component({
  selector: 'app-patient-list',
  imports: [MatButtonModule, MatCardModule, CommonModule, MatGridListModule],
  templateUrl: './patient-list.component.html',
  styleUrl: './patient-list.component.css',
})
export class PatientListComponent implements OnInit {
  private appointmentService = inject(AppointmentService);
  private router = inject(Router);
  private cdr = inject(ChangeDetectorRef);

  appointments: Appointmnets[] = [];

  ngOnInit(): void {
    this.appointmentService.getAppointment().subscribe({
      next: (res: any) => {
        this.appointments = res;
        this.appointmentService.appointmentSet = res;
        localStorage.setItem('appointment', JSON.stringify(res));

        const totalAppointments = this.appointments.reduce(
          (count, appointment) => count + 1,
          0
        );
        this.appointmentService.setPatientCount(totalAppointments);

        this.cdr.detectChanges();
      },
    });
  }

  deleteAppointment(appointmentId: string) {
    this.appointmentService.deleteAppointment(appointmentId).subscribe({
      next: () => {
        this.appointments = this.appointments.filter(
          (appointment) => appointment._id !== appointmentId
        );
        Swal.fire({
          title: 'Notification',
          text: 'Appointment deleted successfully!',
          icon: 'info',
          iconColor: 'rgb(3, 108, 95)',
          confirmButtonText: 'Close',
          confirmButtonColor: 'rgb(252, 151, 114)',
          scrollbarPadding: false,
        });
      },
      error: (err) => {
        Swal.fire({
          title: 'Notification',
          text: 'Failed to delete appointment!',
          icon: 'info',
          iconColor: 'rgb(3, 108, 95)',
          confirmButtonText: 'Close',
          confirmButtonColor: 'rgb(252, 151, 114)',
          scrollbarPadding: false,
        });
      },
    });
  }

  assignDoctor(patient: any) {
    this.router.navigate(['/admin/assign-doctor'], { state: { patient } });
  }
}
