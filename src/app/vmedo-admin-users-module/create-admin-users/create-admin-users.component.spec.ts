import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateAdminUsersComponent } from './create-admin-users.component';

describe('CreateAdminUsersComponent', () => {
  let component: CreateAdminUsersComponent;
  let fixture: ComponentFixture<CreateAdminUsersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateAdminUsersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateAdminUsersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
