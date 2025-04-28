import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConversationStarterComponent } from './conversation-starter.component';

describe('ConversationStarterComponent', () => {
  let component: ConversationStarterComponent;
  let fixture: ComponentFixture<ConversationStarterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ConversationStarterComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConversationStarterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
