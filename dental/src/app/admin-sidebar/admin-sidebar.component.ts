import { Component, inject, Input } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { RouterLink } from '@angular/router';
import { AppointmentService } from '../services/appointment.service';

@Component({
  selector: 'app-admin-sidebar',
  standalone: true,
  imports: [MatCardModule, MatButtonModule, RouterLink],
  templateUrl: './admin-sidebar.component.html',
  styleUrls: ['./admin-sidebar.component.css'],
})
export class AdminSidebarComponent {
  @Input() totalAppointments!: number;
  private doctors = inject(AppointmentService);

  onDoctorClick() {
    this.doctors.doctors = true;
    console.log(this.doctors.doctors);
  }
}
