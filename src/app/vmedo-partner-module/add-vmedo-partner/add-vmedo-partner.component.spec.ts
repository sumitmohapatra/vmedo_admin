import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddVmedoPartnerComponent } from './add-vmedo-partner.component';

describe('AddVmedoPartnerComponent', () => {
  let component: AddVmedoPartnerComponent;
  let fixture: ComponentFixture<AddVmedoPartnerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddVmedoPartnerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddVmedoPartnerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
