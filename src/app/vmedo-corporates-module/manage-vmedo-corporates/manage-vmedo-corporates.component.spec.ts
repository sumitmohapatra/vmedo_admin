import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageVmedoCorporatesComponent } from './manage-vmedo-corporates.component';

describe('ManageVmedoCorporatesComponent', () => {
  let component: ManageVmedoCorporatesComponent;
  let fixture: ComponentFixture<ManageVmedoCorporatesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ManageVmedoCorporatesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ManageVmedoCorporatesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
