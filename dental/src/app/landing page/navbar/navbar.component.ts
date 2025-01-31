import { Component, inject, NgZone } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { Router, RouterLink, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { MatMenuModule } from '@angular/material/menu';
import { UsersService } from '../../services/users.service';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [
    CommonModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    RouterModule,
    MatMenuModule,
    RouterLink,
  ],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent {
  public userService = inject(UsersService);
  private router = inject(Router);
  private ngZone = inject(NgZone);

  menuClick = false;
  menuClicks() {
    this.menuClick = !this.menuClick;
    console.log(this.menuClick);
  }
  close() {
    this.menuClick = false;
  }

  isUserLoggedIn(): boolean {
    return this.userService.isLoggedIn();
  }

  ngOnInit(): void {
    this.ngZone.runOutsideAngular(() => {
      if (!this.userService.user) {
        const userData = localStorage.getItem('user');
        if (userData) {
          this.userService.user = JSON.parse(userData);
        } else {
          this.router.navigate(['/login']);
        }
      }
    });
  }
  logout() {
    this.ngZone.run(() => {
      this.userService.user = undefined;
      localStorage.removeItem('token');

      localStorage.removeItem('user');

      this.router.navigate(['/login']);
    });
  }
}
