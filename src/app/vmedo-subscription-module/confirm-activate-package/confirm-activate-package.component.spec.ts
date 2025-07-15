import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfirmActivatePackageComponent } from './confirm-activate-package.component';

describe('ConfirmActivatePackageComponent', () => {
  let component: ConfirmActivatePackageComponent;
  let fixture: ComponentFixture<ConfirmActivatePackageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConfirmActivatePackageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfirmActivatePackageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
