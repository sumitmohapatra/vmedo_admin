import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HospitalupdatedetailsComponent } from './hospitalupdatedetails.component';

describe('HospitalupdatedetailsComponent', () => {
  let component: HospitalupdatedetailsComponent;
  let fixture: ComponentFixture<HospitalupdatedetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HospitalupdatedetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HospitalupdatedetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
