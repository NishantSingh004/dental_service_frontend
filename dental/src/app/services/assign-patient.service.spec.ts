import { TestBed } from '@angular/core/testing';

import { AssignPatientService } from './assign-patient.service';

describe('AssignPatientService', () => {
  let service: AssignPatientService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AssignPatientService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
