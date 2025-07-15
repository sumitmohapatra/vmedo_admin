import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageEmergencySubcategoryComponent } from './manage-emergency-subcategory.component';

describe('ManageEmergencySubcategoryComponent', () => {
  let component: ManageEmergencySubcategoryComponent;
  let fixture: ComponentFixture<ManageEmergencySubcategoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ManageEmergencySubcategoryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ManageEmergencySubcategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
