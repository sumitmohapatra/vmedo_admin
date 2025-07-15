import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserhomepagebannersComponent } from './userhomepagebanners.component';

describe('UserhomepagebannersComponent', () => {
  let component: UserhomepagebannersComponent;
  let fixture: ComponentFixture<UserhomepagebannersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserhomepagebannersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserhomepagebannersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
