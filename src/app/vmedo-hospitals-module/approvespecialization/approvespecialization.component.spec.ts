import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApprovespecializationComponent } from './approvespecialization.component';

describe('ApprovespecializationComponent', () => {
  let component: ApprovespecializationComponent;
  let fixture: ComponentFixture<ApprovespecializationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ApprovespecializationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ApprovespecializationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
