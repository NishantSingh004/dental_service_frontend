import { Component } from '@angular/core';
import { FooterComponent } from '../landing page/footer/footer.component';
import { FeaturesComponent } from '../landing page/features/features.component';
import { ConsultantsComponent } from '../landing page/consultants/consultants.component';
import { FeedbackComponent } from '../landing page/feedback/feedback.component';
import { InfoSectionComponent } from '../landing page/info-section/info-section.component';
import { OffersComponent } from '../landing page/offers/offers.component';
import { HeroComponent } from '../landing page/hero/hero.component';

@Component({
  selector: 'app-home',
  imports: [
    HeroComponent,
    OffersComponent,
    InfoSectionComponent,
    FeedbackComponent,
    ConsultantsComponent,
    FeaturesComponent,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {}
