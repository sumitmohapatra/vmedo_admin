import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateVmedoPartnerComponent } from './create-vmedo-partner.component';

describe('CreateVmedoPartnerComponent', () => {
  let component: CreateVmedoPartnerComponent;
  let fixture: ComponentFixture<CreateVmedoPartnerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateVmedoPartnerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateVmedoPartnerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
