import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HospitalupdatesComponent } from './hospitalupdates.component';

describe('HospitalupdatesComponent', () => {
  let component: HospitalupdatesComponent;
  let fixture: ComponentFixture<HospitalupdatesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HospitalupdatesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HospitalupdatesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
