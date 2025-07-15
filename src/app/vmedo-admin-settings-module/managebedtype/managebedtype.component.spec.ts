import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagebedtypeComponent } from './managebedtype.component';

describe('ManagebedtypeComponent', () => {
  let component: ManagebedtypeComponent;
  let fixture: ComponentFixture<ManagebedtypeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ManagebedtypeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ManagebedtypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
