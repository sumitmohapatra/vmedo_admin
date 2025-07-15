import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VmedoPartnersComponent } from './vmedo-partners.component';

describe('VmedoPartnersComponent', () => {
  let component: VmedoPartnersComponent;
  let fixture: ComponentFixture<VmedoPartnersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VmedoPartnersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VmedoPartnersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
