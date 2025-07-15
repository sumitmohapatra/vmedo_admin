import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmergencySubcategoryDetailsComponent } from './emergency-subcategory-details.component';

describe('EmergencySubcategoryDetailsComponent', () => {
  let component: EmergencySubcategoryDetailsComponent;
  let fixture: ComponentFixture<EmergencySubcategoryDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmergencySubcategoryDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmergencySubcategoryDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
