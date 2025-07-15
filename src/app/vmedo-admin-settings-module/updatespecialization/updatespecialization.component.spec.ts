import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdatespecializationComponent } from './updatespecialization.component';

describe('UpdatespecializationComponent', () => {
  let component: UpdatespecializationComponent;
  let fixture: ComponentFixture<UpdatespecializationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdatespecializationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdatespecializationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
