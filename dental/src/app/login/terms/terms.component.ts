import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-terms',
  imports: [MatButtonModule, MatCardModule, CommonModule],
  templateUrl: './terms.component.html',
  styleUrl: './terms.component.css',
})
export class TermsComponent {}
