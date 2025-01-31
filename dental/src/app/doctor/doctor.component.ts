import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';
import { RouterLink } from '@angular/router';

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
  selector: 'app-doctor',
  imports: [MatButtonModule, MatCardModule, CommonModule, MatGridListModule],
  templateUrl: './doctor.component.html',
  styleUrl: './doctor.component.css',
})
export class DoctorComponent implements OnInit {
  docname: string = '';

  appointments: Appointmnets[] = [];

  ngOnInit(): void {
    const storedDoctorName = localStorage.getItem('doctorName');
    const doctorId = localStorage.getItem('currentDoctorId');

    if (storedDoctorName) {
      this.docname = storedDoctorName;
    } else {
      this.docname = 'Unknown Doctor';
    }

    if (doctorId) {
      const storageKey = `patients_doctor_${doctorId}`;
      const storedPatients = localStorage.getItem(storageKey);

      if (storedPatients) {
        this.appointments = JSON.parse(storedPatients);
      } else {
        this.appointments = [];
      }
    } else {
      this.appointments = [];
    }
  }
}
