import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-view-question-heading',
  templateUrl: './view-question-heading.component.html',
  styleUrls: ['./view-question-heading.component.css'],
})
export class ViewQuestionHeadingComponent implements OnInit {
  title = 'View Question';

  constructor() {}

  ngOnInit(): void {}
}
