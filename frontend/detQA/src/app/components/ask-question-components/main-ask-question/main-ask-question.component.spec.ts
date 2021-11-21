import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainAskQuestionComponent } from './main-ask-question.component';

describe('MainAskQuestionComponent', () => {
  let component: MainAskQuestionComponent;
  let fixture: ComponentFixture<MainAskQuestionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MainAskQuestionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MainAskQuestionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
