import { Component, Input, OnInit } from '@angular/core';
import { formatDate } from '@angular/common';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AnswersService } from '../../../services/answers.service';
import { Answer } from '../../../models/Answer';

@Component({
  selector: 'app-post-answer-form',
  templateUrl: './post-answer-form.component.html',
  styleUrls: ['./post-answer-form.component.css'],
})
export class PostAnswerFormComponent implements OnInit {
  @Input() questionId!: number;
  @Input() answers!: Answer[];

  submitted = false;
  successMessage = '';
  failureMessage = '';

  postAnswerForm!: FormGroup;

  constructor(private answersService: AnswersService) {}

  ngOnInit(): void {
    this.postAnswerForm = new FormGroup({
      body: new FormControl('', Validators.minLength(15)),
      question_id: new FormControl(this.questionId),
    });
  }

  get postAnswerFormControl() {
    return this.postAnswerForm.controls;
  }

  onSubmit() {
    this.submitted = true;
    this.successMessage = '';
    this.failureMessage = '';

    if (this.postAnswerForm.valid) {
      const { body, question_id } = this.postAnswerForm.value;

      this.answersService.postAnswer({ body, question_id }).subscribe({
        next: () => {
          this.successMessage = 'Your answer has been successfully submitted!';

          const date_created = formatDate(new Date(), 'dd/MM/yyyy', 'en');
          this.answers.push({ body, date_created, question_id });
        },
        error: () => {
          this.failureMessage =
            'Your answer submission failed! Please try again later';
        },
      });
    }

    this.submitted = false;
    this.postAnswerForm.markAsUntouched();
    this.postAnswerForm.setValue({ body: '', question_id: this.questionId });
  }
}
