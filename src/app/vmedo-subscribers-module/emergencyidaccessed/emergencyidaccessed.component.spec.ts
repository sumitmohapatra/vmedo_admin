import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmergencyidaccessedComponent } from './emergencyidaccessed.component';

describe('EmergencyidaccessedComponent', () => {
  let component: EmergencyidaccessedComponent;
  let fixture: ComponentFixture<EmergencyidaccessedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmergencyidaccessedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmergencyidaccessedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
