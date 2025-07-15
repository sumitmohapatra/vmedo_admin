import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CorporatePlanTypeDetailsComponent } from './corporate-plan-type-details.component';

describe('CorporatePlanTypeDetailsComponent', () => {
  let component: CorporatePlanTypeDetailsComponent;
  let fixture: ComponentFixture<CorporatePlanTypeDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CorporatePlanTypeDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CorporatePlanTypeDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
