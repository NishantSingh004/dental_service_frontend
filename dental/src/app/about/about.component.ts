import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { RouterLink } from '@angular/router';
import { AboutClinicComponent } from './about-clinic/about-clinic.component';
import { NoOfUsersComponent } from './no-of-users/no-of-users.component';
import { ConsultantsComponent } from '../landing page/consultants/consultants.component';
import { ContactComponent } from '../about/contact/contact.component';

@Component({
  selector: 'app-about',
  imports: [
    MatButtonModule,
    MatCardModule,
    CommonModule,
    AboutClinicComponent,
    NoOfUsersComponent,
    ConsultantsComponent,
    ContactComponent,
    RouterLink,
  ],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css',
})
export class AboutComponent {}
