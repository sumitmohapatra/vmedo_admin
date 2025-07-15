import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VmedoPartnerDetailsComponent } from './vmedo-partner-details.component';

describe('VmedoPartnerDetailsComponent', () => {
  let component: VmedoPartnerDetailsComponent;
  let fixture: ComponentFixture<VmedoPartnerDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VmedoPartnerDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VmedoPartnerDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
