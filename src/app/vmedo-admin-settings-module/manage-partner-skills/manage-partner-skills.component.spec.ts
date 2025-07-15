import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagePartnerSkillsComponent } from './manage-partner-skills.component';

describe('ManagePartnerSkillsComponent', () => {
  let component: ManagePartnerSkillsComponent;
  let fixture: ComponentFixture<ManagePartnerSkillsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ManagePartnerSkillsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ManagePartnerSkillsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
