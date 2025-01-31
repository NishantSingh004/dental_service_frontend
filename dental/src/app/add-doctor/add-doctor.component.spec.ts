import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddDoctorsComponent } from './add-doctor.component';

describe('DoctorsListComponent', () => {
  let component: AddDoctorsComponent;
  let fixture: ComponentFixture<AddDoctorsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddDoctorsComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(AddDoctorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
