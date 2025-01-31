import { Component, inject } from '@angular/core';
import { MatListModule } from '@angular/material/list';
import { DoctorService } from '../services/doctor.service';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';
import { AssignPatientService } from '../services/assign-patient.service';
import Swal from 'sweetalert2';

interface Patient {
  _id: string;
  name: string;
}

@Component({
  selector: 'app-assign-doctor',
  imports: [
    MatListModule,
    CommonModule,
    MatButtonModule,
    MatCardModule,
    MatGridListModule,
  ],
  templateUrl: './assign-doctor.component.html',
  styleUrl: './assign-doctor.component.css',
})
export class AssignDoctorComponent {
  private AssignPatientService = inject(AssignPatientService);
  patient: Patient | undefined;
  doctors: any[] = [];
  patientArray: any[] = [];

  constructor(private router: Router, private doctorService: DoctorService) {
    const navigation = this.router.getCurrentNavigation();
    const patientState = navigation?.extras.state?.['patient'];

    if (patientState) {
      localStorage.setItem('patient', JSON.stringify(patientState));
      this.patient = patientState as Patient;
    } else {
      const storedPatient = localStorage.getItem('patient');
      if (storedPatient) {
        this.patient = JSON.parse(storedPatient) as Patient;
      }
    }
  }

  ngOnInit(): void {
    this.doctorService.getDoctors().subscribe((res: any) => {
      this.doctors = res;
    });
  }
  assignDoctorToPatient(doctor: any) {
    if (!this.patient) {
      Swal.fire({
        title: 'Notification',
        text: 'No patient data found!',
        icon: 'info',
        iconColor: 'rgb(3, 108, 95)',
        confirmButtonText: 'Close',
        confirmButtonColor: 'rgb(252, 151, 114)',
        scrollbarPadding: false,
      });
      return;
    }

    const patientId = this.patient._id;
    const doctorId = doctor._id;
    const storageKey = `patients_doctor_${doctorId}`;

    let existingAppointments = JSON.parse(
      localStorage.getItem(storageKey) || '[]'
    );

    const isAlreadyAssigned = existingAppointments.some(
      (p: any) => p._id === patientId
    );

    if (isAlreadyAssigned) {
      Swal.fire({
        title: 'Notification',
        text: 'Patient is already assigned to this doctor!',
        icon: 'info',
        iconColor: 'rgb(3, 108, 95)',
        confirmButtonText: 'Close',
        confirmButtonColor: 'rgb(252, 151, 114)',
        scrollbarPadding: false,
      });
      return;
    }

    this.AssignPatientService.getPatientDetails(patientId).subscribe({
      next: (patientDetails) => {
        existingAppointments.push(patientDetails);

        localStorage.setItem(storageKey, JSON.stringify(existingAppointments));

        Swal.fire({
          title: 'Notification',
          text: `Patient ${this.patient!.name} has been assigned to Doctor ${
            doctor.name
          }!`,
          icon: 'info',
          iconColor: 'rgb(3, 108, 95)',
          confirmButtonText: 'Close',
          confirmButtonColor: 'rgb(252, 151, 114)',
          scrollbarPadding: false,
        });

        localStorage.setItem('doctorName', doctor.name);
        localStorage.setItem('currentDoctorId', doctorId);

        this.doctorService
          .assignDoctor({ patientId, doctorId })
          .subscribe(() => {
            this.router.navigate(['/admin'], {
              state: { doctorName: doctor.name },
            });
          });
      },
      error: (error) => {
        console.error('Error fetching patient details:', error);
        Swal.fire({
          title: 'Error',
          text: 'Failed to assign patient!',
          icon: 'error',
          confirmButtonText: 'Close',
          confirmButtonColor: 'rgb(252, 151, 114)',
          scrollbarPadding: false,
        });
      },
    });
  }

  getPatientsForDoctor(doctorId: string) {
    const storageKey = `patients_doctor_${doctorId}`;
    const assignedPatients = JSON.parse(
      localStorage.getItem(storageKey) || '[]'
    );
    return assignedPatients;
  }
}
