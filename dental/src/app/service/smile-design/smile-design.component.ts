import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-smile-design',
  imports: [MatButtonModule, MatCardModule, CommonModule],
  templateUrl: './smile-design.component.html',
  styleUrl: './smile-design.component.css',
})
export class SmileDesignComponent {}
