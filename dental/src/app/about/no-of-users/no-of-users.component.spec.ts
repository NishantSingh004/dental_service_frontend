import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NoOfUsersComponent } from './no-of-users.component';

describe('NoOfUsersComponent', () => {
  let component: NoOfUsersComponent;
  let fixture: ComponentFixture<NoOfUsersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NoOfUsersComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NoOfUsersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
