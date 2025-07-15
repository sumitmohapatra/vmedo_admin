import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeactivateCouponComponent } from './deactivate-coupon.component';

describe('DeactivateCouponComponent', () => {
  let component: DeactivateCouponComponent;
  let fixture: ComponentFixture<DeactivateCouponComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeactivateCouponComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeactivateCouponComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
