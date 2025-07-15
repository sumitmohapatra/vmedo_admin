import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagespecializationComponent } from './managespecialization.component';

describe('ManagespecializationComponent', () => {
  let component: ManagespecializationComponent;
  let fixture: ComponentFixture<ManagespecializationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ManagespecializationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ManagespecializationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
