import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-hero',
  imports: [MatButtonModule, MatCardModule, CommonModule, RouterLink],
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css'],
})
export class HeroComponent implements OnInit {
  elementColor: string = '';
  elementText: string = '';
  ngOnInit(): void {
    this.updateElementColor();
  }

  updateElementColor(): void {
    const currentDate = new Date();
    const currentDay = currentDate.getDay();
    const currentHour = currentDate.getHours();

    if (currentDay === 0) {
      this.elementColor = 'red';
      this.elementText = 'We are closed';
    } else if (currentDay === 6 && currentHour >= 10 && currentHour < 15) {
      this.elementColor = 'green';
      this.elementText = 'We are open now';
    } else if (
      currentDay >= 1 &&
      currentDay <= 5 &&
      currentHour >= 10 &&
      currentHour < 17
    ) {
      this.elementColor = 'green';
      this.elementText = 'We are open now';
    } else {
      this.elementColor = 'red';
      this.elementText = 'We are closed';
    }
  }
}
