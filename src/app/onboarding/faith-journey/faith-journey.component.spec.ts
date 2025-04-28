import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FaithJourneyComponent } from './faith-journey.component';

describe('FaithJourneyComponent', () => {
  let component: FaithJourneyComponent;
  let fixture: ComponentFixture<FaithJourneyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FaithJourneyComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FaithJourneyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
