import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { CategoriesService } from '../../../services/categories.service';
import { Category } from '../../../models/Category';

@Component({
  selector: 'app-ask-question-form',
  templateUrl: './ask-question-form.component.html',
  styleUrls: ['./ask-question-form.component.css'],
})
export class AskQuestionFormComponent implements OnInit {
  submitted = false;
  successMessage = '';

  categories!: Category[];
  askQuestionForm!: FormGroup;

  constructor(private categoriesService: CategoriesService) {}

  ngOnInit(): void {
    this.askQuestionForm = new FormGroup({
      title: new FormControl('', [
        Validators.minLength(15),
        Validators.maxLength(100),
      ]),
      body: new FormControl('', Validators.minLength(30)),
      category: new FormControl('', Validators.required),
    });

    this.categoriesService
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

    if (this.askQuestionForm.valid) {
      console.log(this.askQuestionForm.value);

      this.submitted = false;
      this.askQuestionForm.markAsUntouched();
      this.askQuestionForm.setValue({ title: '', body: '', category: '' });
      this.successMessage = 'Your question has been successfully submitted!';
    }
  }
}
