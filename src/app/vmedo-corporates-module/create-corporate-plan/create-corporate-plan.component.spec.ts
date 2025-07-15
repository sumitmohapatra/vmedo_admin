import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateCorporatePlanComponent } from './create-corporate-plan.component';

describe('CreateCorporatePlanComponent', () => {
  let component: CreateCorporatePlanComponent;
  let fixture: ComponentFixture<CreateCorporatePlanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateCorporatePlanComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateCorporatePlanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
