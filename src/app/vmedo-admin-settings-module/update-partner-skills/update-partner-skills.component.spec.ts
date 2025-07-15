import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdatePartnerSkillsComponent } from './update-partner-skills.component';

describe('UpdatePartnerSkillsComponent', () => {
  let component: UpdatePartnerSkillsComponent;
  let fixture: ComponentFixture<UpdatePartnerSkillsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdatePartnerSkillsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdatePartnerSkillsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
