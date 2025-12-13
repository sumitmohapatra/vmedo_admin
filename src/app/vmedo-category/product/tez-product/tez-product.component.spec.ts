import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TezProductComponent } from './tez-product.component';

describe('TezProductComponent', () => {
  let component: TezProductComponent;
  let fixture: ComponentFixture<TezProductComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TezProductComponent]
    });
    fixture = TestBed.createComponent(TezProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
