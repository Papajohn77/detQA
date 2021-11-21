import { Component, OnInit } from '@angular/core';
import { QuestionsService } from '../../../services/questions.service';
import { Question } from '../../../models/Question';

@Component({
  selector: 'app-questions-container',
  templateUrl: './questions-container.component.html',
  styleUrls: ['./questions-container.component.css'],
})
export class QuestionsContainerComponent implements OnInit {
  page = 1;
  questionsPerPage = 3;

  questions!: Question[];

  constructor(private questionsService: QuestionsService) {}

  ngOnInit(): void {
    this.questionsService
      .getQuestions()
      .subscribe(
        (receivedQuestions: Question[]) => (this.questions = receivedQuestions)
      );
  }

  pageChange(event: number) {
    this.page = event;
  }
}
