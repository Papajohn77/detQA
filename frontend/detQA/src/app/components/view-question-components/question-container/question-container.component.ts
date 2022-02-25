import { Component, Input, OnInit } from '@angular/core';
import { QuestionsService } from '../../../services/questions.service';
import { Question } from '../../../models/Question';

@Component({
  selector: 'app-question-container',
  templateUrl: './question-container.component.html',
  styleUrls: ['./question-container.component.css'],
})
export class QuestionContainerComponent implements OnInit {
  @Input() questionId!: number;

  question!: Question;

  constructor(private questionsService: QuestionsService) {}

  ngOnInit(): void {
    this.questionsService
      .getQuestion(this.questionId)
      .subscribe(
        (receivedQuestion: Question) => (this.question = receivedQuestion)
      );
  }
}
