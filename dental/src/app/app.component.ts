import { Component, Inject, OnInit } from '@angular/core';
import { Router, RouterOutlet, NavigationEnd } from '@angular/router';
import { trigger, transition, style, animate } from '@angular/animations';
import { DOCUMENT } from '@angular/common';
import { NavbarComponent } from './landing page/navbar/navbar.component';
import { FooterComponent } from './landing page/footer/footer.component';

@Component({
  selector: 'app-root',
  imports: [NavbarComponent, RouterOutlet, FooterComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [
    trigger('fadeAnimation', [
      transition('* => *', [
        style({ opacity: 0 }),
        animate(500, style({ opacity: 1 })),
      ]),
    ]),
  ],
})
export class AppComponent implements OnInit {
  title = 'dental';

  constructor(
    private router: Router,
    @Inject(DOCUMENT) private document: Document
  ) {}

  ngOnInit() {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        setTimeout(() => {
          this.document.body.scrollTop = 0;
          this.document.documentElement.scrollTop = 0;
        }, 0);
      }
    });
  }

  getRouteAnimationState() {
    return this.router.url;
  }
}
