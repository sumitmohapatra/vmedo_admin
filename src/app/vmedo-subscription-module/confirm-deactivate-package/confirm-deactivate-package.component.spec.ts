import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfirmDeactivatePackageComponent } from './confirm-deactivate-package.component';

describe('ConfirmDeactivatePackageComponent', () => {
  let component: ConfirmDeactivatePackageComponent;
  let fixture: ComponentFixture<ConfirmDeactivatePackageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConfirmDeactivatePackageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfirmDeactivatePackageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
