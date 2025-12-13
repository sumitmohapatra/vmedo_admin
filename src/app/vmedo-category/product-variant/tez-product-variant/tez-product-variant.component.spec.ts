import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TezProductVariantComponent } from './tez-product-variant.component';

describe('TezProductVariantComponent', () => {
  let component: TezProductVariantComponent;
  let fixture: ComponentFixture<TezProductVariantComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TezProductVariantComponent]
    });
    fixture = TestBed.createComponent(TezProductVariantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
