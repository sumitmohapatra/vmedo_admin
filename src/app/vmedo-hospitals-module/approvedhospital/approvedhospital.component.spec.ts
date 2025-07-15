import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApprovedhospitalComponent } from './approvedhospital.component';

describe('ApprovedhospitalComponent', () => {
  let component: ApprovedhospitalComponent;
  let fixture: ComponentFixture<ApprovedhospitalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ApprovedhospitalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ApprovedhospitalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
