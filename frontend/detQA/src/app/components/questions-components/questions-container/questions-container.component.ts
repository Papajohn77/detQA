import { Component, OnInit } from '@angular/core';
import { QuestionsService } from '../../../services/questions.service';
import { Question } from '../../../models/Question';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-questions-container',
  templateUrl: './questions-container.component.html',
  styleUrls: ['./questions-container.component.css'],
})
export class QuestionsContainerComponent implements OnInit {
  page!: number;
  questionsPerPage = 3;

  searchTerm!: string;
  questions!: Question[];

  constructor(
    private activatedRoute: ActivatedRoute,
    private questionsService: QuestionsService
  ) {}

  ngOnInit(): void {
    this.activatedRoute.queryParams.subscribe((params) => {
      this.page = params.page ? Number(params.page) : 1;
      this.searchTerm = params.search || '';
    });

    this.questionsService
      .getQuestions(this.page, this.searchTerm)
      .subscribe(
        (receivedQuestions: Question[]) => (this.questions = receivedQuestions)
      );
  }
}
