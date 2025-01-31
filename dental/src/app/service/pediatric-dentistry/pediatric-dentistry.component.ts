import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-pediatric-dentistry',
  imports: [MatButtonModule, MatCardModule, CommonModule],
  templateUrl: './pediatric-dentistry.component.html',
  styleUrl: './pediatric-dentistry.component.css',
})
export class PediatricDentistryComponent {}
