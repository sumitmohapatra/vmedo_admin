import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditPartnerTypeComponent } from './edit-partner-type.component';

describe('EditPartnerTypeComponent', () => {
  let component: EditPartnerTypeComponent;
  let fixture: ComponentFixture<EditPartnerTypeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditPartnerTypeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditPartnerTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
