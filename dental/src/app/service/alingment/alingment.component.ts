import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
@Component({
  selector: 'app-alingment',
  imports: [MatButtonModule, MatCardModule, CommonModule],
  templateUrl: './alingment.component.html',
  styleUrl: './alingment.component.css',
})
export class AlingmentComponent {}
