import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateCorporatePlanComponent } from './update-corporate-plan.component';

describe('UpdateCorporatePlanComponent', () => {
  let component: UpdateCorporatePlanComponent;
  let fixture: ComponentFixture<UpdateCorporatePlanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateCorporatePlanComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateCorporatePlanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
