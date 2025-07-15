import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UnblockhospitalComponent } from './unblockhospital.component';

describe('UnblockhospitalComponent', () => {
  let component: UnblockhospitalComponent;
  let fixture: ComponentFixture<UnblockhospitalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UnblockhospitalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UnblockhospitalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
