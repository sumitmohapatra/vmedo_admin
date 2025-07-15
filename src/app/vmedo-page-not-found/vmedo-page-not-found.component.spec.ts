import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VmedoPageNotFoundComponent } from './vmedo-page-not-found.component';

describe('VmedoPageNotFoundComponent', () => {
  let component: VmedoPageNotFoundComponent;
  let fixture: ComponentFixture<VmedoPageNotFoundComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VmedoPageNotFoundComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VmedoPageNotFoundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
