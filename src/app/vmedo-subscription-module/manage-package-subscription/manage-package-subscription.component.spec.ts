import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagePackageSubscriptionComponent } from './manage-package-subscription.component';

describe('ManagePackageSubscriptionComponent', () => {
  let component: ManagePackageSubscriptionComponent;
  let fixture: ComponentFixture<ManagePackageSubscriptionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ManagePackageSubscriptionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ManagePackageSubscriptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
