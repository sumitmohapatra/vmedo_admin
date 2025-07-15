import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlooddonorsComponent } from './blooddonors.component';

describe('BlooddonorsComponent', () => {
  let component: BlooddonorsComponent;
  let fixture: ComponentFixture<BlooddonorsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BlooddonorsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BlooddonorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
