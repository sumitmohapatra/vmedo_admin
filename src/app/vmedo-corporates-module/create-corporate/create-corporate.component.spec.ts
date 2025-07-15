import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateCorporateComponent } from './create-corporate.component';

describe('CreateCorporateComponent', () => {
  let component: CreateCorporateComponent;
  let fixture: ComponentFixture<CreateCorporateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateCorporateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateCorporateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
