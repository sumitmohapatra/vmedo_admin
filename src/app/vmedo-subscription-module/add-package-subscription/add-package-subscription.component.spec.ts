import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddPackageSubscriptionComponent } from './add-package-subscription.component';

describe('AddPackageSubscriptionComponent', () => {
  let component: AddPackageSubscriptionComponent;
  let fixture: ComponentFixture<AddPackageSubscriptionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddPackageSubscriptionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddPackageSubscriptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
