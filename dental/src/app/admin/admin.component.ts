import { Component, inject, OnInit } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { AdminSidebarComponent } from '../admin-sidebar/admin-sidebar.component';
import { AppointmentService } from '../services/appointment.service';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-admin',
  imports: [AdminSidebarComponent, RouterOutlet, MatButtonModule],
  templateUrl: './admin.component.html',
  styleUrl: './admin.component.css',
})
export class AdminComponent implements OnInit {
  private appointmentService = inject(AppointmentService);
  patientCount = 0;
  ngOnInit(): void {
    this.appointmentService.patientCount$.subscribe((count) => {
      this.patientCount = count;
      console.log('Received Patient Count:', this.patientCount);
    });
  }
  doctors = this.appointmentService.doctors;
}
