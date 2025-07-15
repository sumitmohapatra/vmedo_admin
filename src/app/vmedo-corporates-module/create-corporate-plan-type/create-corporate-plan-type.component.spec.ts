import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateCorporatePlanTypeComponent } from './create-corporate-plan-type.component';

describe('CreateCorporatePlanTypeComponent', () => {
  let component: CreateCorporatePlanTypeComponent;
  let fixture: ComponentFixture<CreateCorporatePlanTypeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateCorporatePlanTypeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateCorporatePlanTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
