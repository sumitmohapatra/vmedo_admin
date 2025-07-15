import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdatebedtypeComponent } from './updatebedtype.component';

describe('UpdatebedtypeComponent', () => {
  let component: UpdatebedtypeComponent;
  let fixture: ComponentFixture<UpdatebedtypeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdatebedtypeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdatebedtypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
