import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SocialStyleComponent } from './social-style.component';

describe('SocialStyleComponent', () => {
  let component: SocialStyleComponent;
  let fixture: ComponentFixture<SocialStyleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SocialStyleComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SocialStyleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
