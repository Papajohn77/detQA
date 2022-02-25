import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainViewQuestionComponent } from './main-view-question.component';

describe('MainViewQuestionComponent', () => {
  let component: MainViewQuestionComponent;
  let fixture: ComponentFixture<MainViewQuestionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MainViewQuestionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MainViewQuestionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
