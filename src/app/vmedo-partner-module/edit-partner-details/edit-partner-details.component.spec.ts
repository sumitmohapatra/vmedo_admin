import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditPartnerDetailsComponent } from './edit-partner-details.component';

describe('EditPartnerDetailsComponent', () => {
  let component: EditPartnerDetailsComponent;
  let fixture: ComponentFixture<EditPartnerDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditPartnerDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditPartnerDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
