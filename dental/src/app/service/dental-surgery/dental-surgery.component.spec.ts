import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DentalSurgeryComponent } from './dental-surgery.component';

describe('DentalSurgeryComponent', () => {
  let component: DentalSurgeryComponent;
  let fixture: ComponentFixture<DentalSurgeryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DentalSurgeryComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DentalSurgeryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
