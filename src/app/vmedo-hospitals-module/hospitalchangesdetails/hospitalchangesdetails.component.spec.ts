import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HospitalchangesdetailsComponent } from './hospitalchangesdetails.component';

describe('HospitalchangesdetailsComponent', () => {
  let component: HospitalchangesdetailsComponent;
  let fixture: ComponentFixture<HospitalchangesdetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HospitalchangesdetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HospitalchangesdetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
