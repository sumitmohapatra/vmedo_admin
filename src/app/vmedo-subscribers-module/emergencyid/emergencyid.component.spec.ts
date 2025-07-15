import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmergencyidComponent } from './emergencyid.component';

describe('EmergencyidComponent', () => {
  let component: EmergencyidComponent;
  let fixture: ComponentFixture<EmergencyidComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmergencyidComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmergencyidComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
