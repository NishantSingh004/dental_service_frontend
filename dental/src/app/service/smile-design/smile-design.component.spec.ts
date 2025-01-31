import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SmileDesignComponent } from './smile-design.component';

describe('SmileDesignComponent', () => {
  let component: SmileDesignComponent;
  let fixture: ComponentFixture<SmileDesignComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SmileDesignComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SmileDesignComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
