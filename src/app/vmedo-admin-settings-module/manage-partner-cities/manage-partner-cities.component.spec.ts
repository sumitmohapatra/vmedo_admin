import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagePartnerCitiesComponent } from './manage-partner-cities.component';

describe('ManagePartnerCitiesComponent', () => {
  let component: ManagePartnerCitiesComponent;
  let fixture: ComponentFixture<ManagePartnerCitiesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ManagePartnerCitiesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ManagePartnerCitiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
