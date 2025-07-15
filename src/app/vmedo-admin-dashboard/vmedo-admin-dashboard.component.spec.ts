import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VmedoAdminDashboardComponent } from './vmedo-admin-dashboard.component';

describe('VmedoAdminDashboardComponent', () => {
  let component: VmedoAdminDashboardComponent;
  let fixture: ComponentFixture<VmedoAdminDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VmedoAdminDashboardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VmedoAdminDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
