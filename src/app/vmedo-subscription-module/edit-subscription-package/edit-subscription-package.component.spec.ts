import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditSubscriptionPackageComponent } from './edit-subscription-package.component';

describe('EditSubscriptionPackageComponent', () => {
  let component: EditSubscriptionPackageComponent;
  let fixture: ComponentFixture<EditSubscriptionPackageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditSubscriptionPackageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditSubscriptionPackageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
