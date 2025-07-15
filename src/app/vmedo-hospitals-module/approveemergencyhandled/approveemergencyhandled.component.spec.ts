import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApproveemergencyhandledComponent } from './approveemergencyhandled.component';

describe('ApproveemergencyhandledComponent', () => {
  let component: ApproveemergencyhandledComponent;
  let fixture: ComponentFixture<ApproveemergencyhandledComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ApproveemergencyhandledComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ApproveemergencyhandledComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
