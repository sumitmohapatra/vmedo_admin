import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HospitalchangeslistComponent } from './hospitalchangeslist.component';

describe('HospitalchangeslistComponent', () => {
  let component: HospitalchangeslistComponent;
  let fixture: ComponentFixture<HospitalchangeslistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HospitalchangeslistComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HospitalchangeslistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
