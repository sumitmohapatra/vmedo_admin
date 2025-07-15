import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VmedoRenewedUserComponent } from './vmedo-renewed-user.component';

describe('VmedoRenewedUserComponent', () => {
  let component: VmedoRenewedUserComponent;
  let fixture: ComponentFixture<VmedoRenewedUserComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VmedoRenewedUserComponent]
    });
    fixture = TestBed.createComponent(VmedoRenewedUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
