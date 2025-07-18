import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageVmedoAgentsComponent } from './manage-vmedo-agents.component';

describe('ManageVmedoAgentsComponent', () => {
  let component: ManageVmedoAgentsComponent;
  let fixture: ComponentFixture<ManageVmedoAgentsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ManageVmedoAgentsComponent]
    });
    fixture = TestBed.createComponent(ManageVmedoAgentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
