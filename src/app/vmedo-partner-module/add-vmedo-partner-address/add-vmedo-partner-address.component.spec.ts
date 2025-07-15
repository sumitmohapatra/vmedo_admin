import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddVmedoPartnerAddressComponent } from './add-vmedo-partner-address.component';

describe('AddVmedoPartnerAddressComponent', () => {
  let component: AddVmedoPartnerAddressComponent;
  let fixture: ComponentFixture<AddVmedoPartnerAddressComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddVmedoPartnerAddressComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddVmedoPartnerAddressComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
