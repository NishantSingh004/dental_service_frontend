import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PediatricDentistryComponent } from './pediatric-dentistry.component';

describe('PediatricDentistryComponent', () => {
  let component: PediatricDentistryComponent;
  let fixture: ComponentFixture<PediatricDentistryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PediatricDentistryComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PediatricDentistryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
