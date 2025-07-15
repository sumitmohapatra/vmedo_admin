import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateduserdetailsComponent } from './createduserdetails.component';

describe('CreateduserdetailsComponent', () => {
  let component: CreateduserdetailsComponent;
  let fixture: ComponentFixture<CreateduserdetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateduserdetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateduserdetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
