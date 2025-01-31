import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlingmentComponent } from './alingment.component';

describe('AlingmentComponent', () => {
  let component: AlingmentComponent;
  let fixture: ComponentFixture<AlingmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AlingmentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AlingmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
