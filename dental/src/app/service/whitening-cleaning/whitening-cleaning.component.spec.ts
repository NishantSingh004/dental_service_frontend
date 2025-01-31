import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WhiteningCleaningComponent } from './whitening-cleaning.component';

describe('WhiteningCleaningComponent', () => {
  let component: WhiteningCleaningComponent;
  let fixture: ComponentFixture<WhiteningCleaningComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WhiteningCleaningComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WhiteningCleaningComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
