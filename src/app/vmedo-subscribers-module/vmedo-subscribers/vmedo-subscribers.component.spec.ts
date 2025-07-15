import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VmedoSubscribersComponent } from './vmedo-subscribers.component';

describe('VmedoSubscribersComponent', () => {
  let component: VmedoSubscribersComponent;
  let fixture: ComponentFixture<VmedoSubscribersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VmedoSubscribersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VmedoSubscribersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
