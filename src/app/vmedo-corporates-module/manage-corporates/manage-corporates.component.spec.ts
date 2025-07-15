import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageCorporatesComponent } from './manage-corporates.component';

describe('ManageCorporatesComponent', () => {
  let component: ManageCorporatesComponent;
  let fixture: ComponentFixture<ManageCorporatesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ManageCorporatesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ManageCorporatesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
