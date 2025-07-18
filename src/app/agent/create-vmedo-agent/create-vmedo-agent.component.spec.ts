import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateVmedoAgentComponent } from './create-vmedo-agent.component';

describe('CreateVmedoAgentComponent', () => {
  let component: CreateVmedoAgentComponent;
  let fixture: ComponentFixture<CreateVmedoAgentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CreateVmedoAgentComponent]
    });
    fixture = TestBed.createComponent(CreateVmedoAgentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
