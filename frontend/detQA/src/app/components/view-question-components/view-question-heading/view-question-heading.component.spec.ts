import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewQuestionHeadingComponent } from './view-question-heading.component';

describe('ViewQuestionHeadingComponent', () => {
  let component: ViewQuestionHeadingComponent;
  let fixture: ComponentFixture<ViewQuestionHeadingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewQuestionHeadingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewQuestionHeadingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
