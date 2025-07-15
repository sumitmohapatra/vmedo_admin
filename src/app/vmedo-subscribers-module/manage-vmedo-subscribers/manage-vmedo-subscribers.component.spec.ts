import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageVmedoSubscribersComponent } from './manage-vmedo-subscribers.component';

describe('ManageVmedoSubscribersComponent', () => {
  let component: ManageVmedoSubscribersComponent;
  let fixture: ComponentFixture<ManageVmedoSubscribersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ManageVmedoSubscribersComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ManageVmedoSubscribersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
