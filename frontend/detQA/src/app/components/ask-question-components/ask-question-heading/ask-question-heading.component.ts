import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ask-question-heading',
  templateUrl: './ask-question-heading.component.html',
  styleUrls: ['./ask-question-heading.component.css'],
})
export class AskQuestionHeadingComponent implements OnInit {
  title = 'Ask a Question';

  constructor() {}

  ngOnInit(): void {}
}
