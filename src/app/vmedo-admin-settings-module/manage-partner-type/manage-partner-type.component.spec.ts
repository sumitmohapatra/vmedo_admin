import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagePartnerTypeComponent } from './manage-partner-type.component';

describe('ManagePartnerTypeComponent', () => {
  let component: ManagePartnerTypeComponent;
  let fixture: ComponentFixture<ManagePartnerTypeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ManagePartnerTypeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ManagePartnerTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
