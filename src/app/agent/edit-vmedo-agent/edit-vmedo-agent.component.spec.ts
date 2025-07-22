import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditVmedoAgentComponent } from './edit-vmedo-agent.component';

describe('EditVmedoAgentComponent', () => {
  let component: EditVmedoAgentComponent;
  let fixture: ComponentFixture<EditVmedoAgentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EditVmedoAgentComponent]
    });
    fixture = TestBed.createComponent(EditVmedoAgentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
