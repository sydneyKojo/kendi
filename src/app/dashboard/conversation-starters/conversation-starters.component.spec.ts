import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConversationStartersComponent } from './conversation-starters.component';

describe('ConversationStartersComponent', () => {
  let component: ConversationStartersComponent;
  let fixture: ComponentFixture<ConversationStartersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ConversationStartersComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConversationStartersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
