import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-clinic-policies',
  imports: [MatButtonModule, MatCardModule, CommonModule],
  templateUrl: './clinic-policies.component.html',
  styleUrl: './clinic-policies.component.css',
})
export class ClinicPoliciesComponent {}
