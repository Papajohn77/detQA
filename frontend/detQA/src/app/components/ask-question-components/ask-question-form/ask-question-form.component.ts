import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { CategoryService } from '../../../services/category.service';
import { QuestionService } from '../../../services/question.service';
import { Category } from '../../../models/Category';

@Component({
  selector: 'app-ask-question-form',
  templateUrl: './ask-question-form.component.html',
  styleUrls: ['./ask-question-form.component.css'],
})
export class AskQuestionFormComponent implements OnInit {
  submitted = false;
  successMessage = '';
  failureMessage = '';

  categories!: Category[];
  askQuestionForm!: FormGroup;

  constructor(
    private categoryService: CategoryService,
    private questionService: QuestionService
  ) {}

  ngOnInit(): void {
    this.askQuestionForm = new FormGroup({
      title: new FormControl('', [
        Validators.minLength(15),
        Validators.maxLength(100),
      ]),
      body: new FormControl('', Validators.minLength(30)),
      category: new FormControl('', Validators.required),
    });

    this.categoryService
      .getCategories()
      .subscribe(
        (receivedCategories: Category[]) =>
          (this.categories = receivedCategories)
      );
  }

  get askQuestionFormControl() {
    return this.askQuestionForm.controls;
  }

  onSubmit() {
    this.submitted = true;
    this.successMessage = '';
    this.failureMessage = '';

    if (this.askQuestionForm.valid) {
      this.questionService.postQuestion(this.askQuestionForm.value).subscribe({
        next: () => {
          this.successMessage =
            'Your question has been successfully submitted!';
        },
        error: () => {
          this.failureMessage =
            'Your question submission failed! Please try again later';
        },
      });

      this.submitted = false;
      this.askQuestionForm.markAsUntouched();
      this.askQuestionForm.setValue({ title: '', body: '', category: '' });
    }
  }
}
