import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmergencyCardsComponent } from './emergency-cards.component';

describe('EmergencyCardsComponent', () => {
  let component: EmergencyCardsComponent;
  let fixture: ComponentFixture<EmergencyCardsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmergencyCardsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmergencyCardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
