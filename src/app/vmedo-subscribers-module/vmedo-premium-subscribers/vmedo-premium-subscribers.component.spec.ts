import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VmedoPremiumSubscribersComponent } from './vmedo-premium-subscribers.component';

describe('VmedoPremiumSubscribersComponent', () => {
  let component: VmedoPremiumSubscribersComponent;
  let fixture: ComponentFixture<VmedoPremiumSubscribersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VmedoPremiumSubscribersComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VmedoPremiumSubscribersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
