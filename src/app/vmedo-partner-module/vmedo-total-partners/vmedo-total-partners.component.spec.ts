import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VmedoTotalPartnersComponent } from './vmedo-total-partners.component';

describe('VmedoTotalPartnersComponent', () => {
  let component: VmedoTotalPartnersComponent;
  let fixture: ComponentFixture<VmedoTotalPartnersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VmedoTotalPartnersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VmedoTotalPartnersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
