import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-no-of-users',
  imports: [MatCardModule, MatIconModule, MatGridListModule],
  templateUrl: './no-of-users.component.html',
  styleUrl: './no-of-users.component.css',
})
export class NoOfUsersComponent {}
