import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateProductVariantComponent } from './update-product-variant.component';

describe('UpdateProductVariantComponent', () => {
  let component: UpdateProductVariantComponent;
  let fixture: ComponentFixture<UpdateProductVariantComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UpdateProductVariantComponent]
    });
    fixture = TestBed.createComponent(UpdateProductVariantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
