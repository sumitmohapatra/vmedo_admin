import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateCorporateComponent } from './update-corporate.component';

describe('UpdateCorporateComponent', () => {
  let component: UpdateCorporateComponent;
  let fixture: ComponentFixture<UpdateCorporateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateCorporateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateCorporateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
