import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HospitalupdaterequestComponent } from './hospitalupdaterequest.component';

describe('HospitalupdaterequestComponent', () => {
  let component: HospitalupdaterequestComponent;
  let fixture: ComponentFixture<HospitalupdaterequestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HospitalupdaterequestComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HospitalupdaterequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
