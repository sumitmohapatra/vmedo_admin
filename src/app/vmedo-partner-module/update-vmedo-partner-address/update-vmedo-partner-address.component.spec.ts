import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateVmedoPartnerAddressComponent } from './update-vmedo-partner-address.component';

describe('UpdateVmedoPartnerAddressComponent', () => {
  let component: UpdateVmedoPartnerAddressComponent;
  let fixture: ComponentFixture<UpdateVmedoPartnerAddressComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateVmedoPartnerAddressComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdateVmedoPartnerAddressComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
