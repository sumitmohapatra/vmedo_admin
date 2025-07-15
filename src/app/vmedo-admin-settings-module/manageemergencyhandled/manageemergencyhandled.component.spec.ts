import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageemergencyhandledComponent } from './manageemergencyhandled.component';

describe('ManageemergencyhandledComponent', () => {
  let component: ManageemergencyhandledComponent;
  let fixture: ComponentFixture<ManageemergencyhandledComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ManageemergencyhandledComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ManageemergencyhandledComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
