import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-faqs',
  imports: [MatButtonModule, MatCardModule, CommonModule],
  templateUrl: './faqs.component.html',
  styleUrl: './faqs.component.css',
})
export class FaqsComponent {}
