import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CouponAccessedDetailsComponent } from './coupon-accessed-details.component';

describe('CouponAccessedDetailsComponent', () => {
  let component: CouponAccessedDetailsComponent;
  let fixture: ComponentFixture<CouponAccessedDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CouponAccessedDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CouponAccessedDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
