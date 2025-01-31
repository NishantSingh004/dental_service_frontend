import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { RouterLink } from '@angular/router';
import { AppointmentComponent } from '../service/appointment/appointment.component';

@Component({
  selector: 'app-services',
  imports: [
    MatButtonModule,
    MatCardModule,
    CommonModule,
    AppointmentComponent,
    RouterLink,
  ],
  templateUrl: './services.component.html',
  styleUrl: './services.component.css',
})
export class ServicesComponent {}
