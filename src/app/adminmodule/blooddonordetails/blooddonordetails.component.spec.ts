import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlooddonordetailsComponent } from './blooddonordetails.component';

describe('BlooddonordetailsComponent', () => {
  let component: BlooddonordetailsComponent;
  let fixture: ComponentFixture<BlooddonordetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BlooddonordetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BlooddonordetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
