import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddCorporatecreditComponent } from './add-corporatecredit.component';

describe('AddCorporatecreditComponent', () => {
  let component: AddCorporatecreditComponent;
  let fixture: ComponentFixture<AddCorporatecreditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddCorporatecreditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddCorporatecreditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
