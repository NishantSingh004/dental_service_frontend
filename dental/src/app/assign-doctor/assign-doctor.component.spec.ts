import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssignDoctorComponent } from './assign-doctor.component';

describe('AssignDoctorComponent', () => {
  let component: AssignDoctorComponent;
  let fixture: ComponentFixture<AssignDoctorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AssignDoctorComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AssignDoctorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
