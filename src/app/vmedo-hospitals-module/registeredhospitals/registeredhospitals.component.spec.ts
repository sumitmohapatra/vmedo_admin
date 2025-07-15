import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisteredhospitalsComponent } from './registeredhospitals.component';

describe('RegisteredhospitalsComponent', () => {
  let component: RegisteredhospitalsComponent;
  let fixture: ComponentFixture<RegisteredhospitalsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegisteredhospitalsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisteredhospitalsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
