import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlockedhospitaldetailsComponent } from './blockedhospitaldetails.component';

describe('BlockedhospitaldetailsComponent', () => {
  let component: BlockedhospitaldetailsComponent;
  let fixture: ComponentFixture<BlockedhospitaldetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BlockedhospitaldetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BlockedhospitaldetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
