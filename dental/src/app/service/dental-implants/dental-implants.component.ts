import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-dental-implants',
  imports: [MatButtonModule, MatCardModule, CommonModule],
  templateUrl: './dental-implants.component.html',
  styleUrl: './dental-implants.component.css',
})
export class DentalImplantsComponent {}
