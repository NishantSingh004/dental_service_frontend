import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-about-clinic',
  imports: [MatCardModule, MatIconModule, MatButtonModule, RouterLink],
  templateUrl: './about-clinic.component.html',
  styleUrl: './about-clinic.component.css',
})
export class AboutClinicComponent {}
