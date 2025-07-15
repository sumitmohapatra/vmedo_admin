import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RejectedhospitalsComponent } from './rejectedhospitals.component';

describe('RejectedhospitalsComponent', () => {
  let component: RejectedhospitalsComponent;
  let fixture: ComponentFixture<RejectedhospitalsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RejectedhospitalsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RejectedhospitalsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
