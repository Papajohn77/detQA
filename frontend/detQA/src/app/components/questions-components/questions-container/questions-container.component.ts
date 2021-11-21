import { Component, OnInit } from '@angular/core';
import { QuestionsService } from '../../../services/questions.service';
import { SearchService } from '../../../services/search.service';
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
  searchTerm!: string;

  constructor(
    private questionsService: QuestionsService,
    private searchService: SearchService
  ) {}

  ngOnInit(): void {
    this.questionsService
      .getQuestions()
      .subscribe(
        (receivedQuestions: Question[]) => (this.questions = receivedQuestions)
      );

    this.searchService.searchTerm.subscribe((data: string) => {
      this.searchTerm = data;
    });
  }

  pageChange(event: number) {
    this.page = event;
  }
}
