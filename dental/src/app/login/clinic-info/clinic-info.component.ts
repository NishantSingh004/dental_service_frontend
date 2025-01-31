import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-clinic-info',
  imports: [MatCardModule, RouterLink],
  templateUrl: './clinic-info.component.html',
  styleUrl: './clinic-info.component.css',
})
export class ClinicInfoComponent {}
