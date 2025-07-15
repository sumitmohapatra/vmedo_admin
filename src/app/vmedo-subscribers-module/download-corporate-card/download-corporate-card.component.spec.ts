import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DownloadCorporateCardComponent } from './download-corporate-card.component';

describe('DownloadCorporateCardComponent', () => {
  let component: DownloadCorporateCardComponent;
  let fixture: ComponentFixture<DownloadCorporateCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DownloadCorporateCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DownloadCorporateCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
