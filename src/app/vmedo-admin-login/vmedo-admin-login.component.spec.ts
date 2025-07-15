import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VmedoAdminLoginComponent } from './vmedo-admin-login.component';

describe('VmedoAdminLoginComponent', () => {
  let component: VmedoAdminLoginComponent;
  let fixture: ComponentFixture<VmedoAdminLoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VmedoAdminLoginComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VmedoAdminLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
