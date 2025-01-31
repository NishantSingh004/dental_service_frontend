import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-whitening-cleaning',
  imports: [MatButtonModule, MatCardModule, CommonModule],
  templateUrl: './whitening-cleaning.component.html',
  styleUrl: './whitening-cleaning.component.css',
})
export class WhiteningCleaningComponent {}
