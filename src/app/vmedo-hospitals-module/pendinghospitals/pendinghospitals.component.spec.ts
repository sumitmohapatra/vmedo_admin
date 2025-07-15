import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PendinghospitalsComponent } from './pendinghospitals.component';

describe('PendinghospitalsComponent', () => {
  let component: PendinghospitalsComponent;
  let fixture: ComponentFixture<PendinghospitalsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PendinghospitalsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PendinghospitalsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
