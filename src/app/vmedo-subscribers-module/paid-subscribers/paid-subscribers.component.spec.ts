import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaidSubscribersComponent } from './paid-subscribers.component';

describe('PaidSubscribersComponent', () => {
  let component: PaidSubscribersComponent;
  let fixture: ComponentFixture<PaidSubscribersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PaidSubscribersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PaidSubscribersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
