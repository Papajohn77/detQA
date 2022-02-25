import { Component, Input, OnInit } from '@angular/core';
import { AnswerService } from '../../../services/answer.service';
import { Answer } from '../../../models/Answer';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-answers-container',
  templateUrl: './answers-container.component.html',
  styleUrls: ['./answers-container.component.css'],
})
export class AnswersContainerComponent implements OnInit {
  @Input() answers!: Answer[];

  constructor() {}

  ngOnInit(): void {}
}
