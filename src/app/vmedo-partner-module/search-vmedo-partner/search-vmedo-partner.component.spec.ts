import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchVmedoPartnerComponent } from './search-vmedo-partner.component';

describe('SearchVmedoPartnerComponent', () => {
  let component: SearchVmedoPartnerComponent;
  let fixture: ComponentFixture<SearchVmedoPartnerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SearchVmedoPartnerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchVmedoPartnerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
