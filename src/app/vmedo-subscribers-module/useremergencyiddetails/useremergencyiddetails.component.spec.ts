import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UseremergencyiddetailsComponent } from './useremergencyiddetails.component';

describe('UseremergencyiddetailsComponent', () => {
  let component: UseremergencyiddetailsComponent;
  let fixture: ComponentFixture<UseremergencyiddetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UseremergencyiddetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UseremergencyiddetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
