import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdatePartnerCityComponent } from './update-partner-city.component';

describe('UpdatePartnerCityComponent', () => {
  let component: UpdatePartnerCityComponent;
  let fixture: ComponentFixture<UpdatePartnerCityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdatePartnerCityComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdatePartnerCityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
