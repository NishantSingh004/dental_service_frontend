import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClinicPoliciesComponent } from './clinic-policies.component';

describe('ClinicPoliciesComponent', () => {
  let component: ClinicPoliciesComponent;
  let fixture: ComponentFixture<ClinicPoliciesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ClinicPoliciesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ClinicPoliciesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
