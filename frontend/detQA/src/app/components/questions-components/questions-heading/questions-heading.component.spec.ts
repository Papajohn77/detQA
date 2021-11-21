import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuestionsHeadingComponent } from './questions-heading.component';

describe('QuestionsHeadingComponent', () => {
  let component: QuestionsHeadingComponent;
  let fixture: ComponentFixture<QuestionsHeadingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QuestionsHeadingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QuestionsHeadingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
