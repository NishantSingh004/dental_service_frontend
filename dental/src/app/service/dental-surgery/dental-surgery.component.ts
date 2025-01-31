import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-dental-surgery',
  imports: [MatButtonModule, MatCardModule, CommonModule],
  templateUrl: './dental-surgery.component.html',
  styleUrl: './dental-surgery.component.css',
})
export class DentalSurgeryComponent {}
