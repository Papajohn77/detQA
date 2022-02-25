import { Component, OnInit } from '@angular/core';
import { AnswerService } from '../../../services/answer.service';
import { Answer } from '../../../models/Answer';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-main-view-question',
  templateUrl: './main-view-question.component.html',
  styleUrls: ['./main-view-question.component.css'],
})
export class MainViewQuestionComponent implements OnInit {
  questionId!: number;
  answers!: Answer[];

  constructor(
    private route: ActivatedRoute,
    private answerService: AnswerService
  ) {}

  ngOnInit(): void {
    const routeParams = this.route.snapshot.paramMap;
    this.questionId = Number(routeParams.get('questionId'));

    this.answerService
      .getAnswers(this.questionId)
      .subscribe(
        (receivedAnswers: Answer[]) => (this.answers = receivedAnswers)
      );
  }
}
