import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateemergencyhandleComponent } from './updateemergencyhandle.component';

describe('UpdateemergencyhandleComponent', () => {
  let component: UpdateemergencyhandleComponent;
  let fixture: ComponentFixture<UpdateemergencyhandleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateemergencyhandleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateemergencyhandleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
