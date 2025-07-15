import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllhospitalsComponent } from './allhospitals.component';

describe('AllhospitalsComponent', () => {
  let component: AllhospitalsComponent;
  let fixture: ComponentFixture<AllhospitalsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllhospitalsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AllhospitalsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
