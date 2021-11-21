import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AskQuestionHeadingComponent } from './ask-question-heading.component';

describe('AskQuestionHeadingComponent', () => {
  let component: AskQuestionHeadingComponent;
  let fixture: ComponentFixture<AskQuestionHeadingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AskQuestionHeadingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AskQuestionHeadingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
