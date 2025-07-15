import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageCorporatePlansComponent } from './manage-corporate-plans.component';

describe('ManageCorporatePlansComponent', () => {
  let component: ManageCorporatePlansComponent;
  let fixture: ComponentFixture<ManageCorporatePlansComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ManageCorporatePlansComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ManageCorporatePlansComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
