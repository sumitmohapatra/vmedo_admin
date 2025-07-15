import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CorporateCardsComponent } from './corporate-cards.component';

describe('CorporateCardsComponent', () => {
  let component: CorporateCardsComponent;
  let fixture: ComponentFixture<CorporateCardsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CorporateCardsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CorporateCardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
