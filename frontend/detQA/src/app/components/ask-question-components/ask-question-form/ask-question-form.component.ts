import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { CategoriesService } from '../../../services/categories.service';
import { Category } from '../../../models/Category';

@Component({
  selector: 'app-ask-question-form',
  templateUrl: './ask-question-form.component.html',
  styleUrls: ['./ask-question-form.component.css'],
})
export class AskQuestionFormComponent implements OnInit {
  successMessage = '';

  categories!: Category[];
  askQuestionForm!: FormGroup;

  constructor(private categoriesService: CategoriesService) {}

  ngOnInit(): void {
    this.askQuestionForm = new FormGroup({
      title: new FormControl(''),
      body: new FormControl(''),
      category: new FormControl(''),
    });

    this.categoriesService
      .getCategories()
      .subscribe(
        (receivedCategories: Category[]) =>
          (this.categories = receivedCategories)
      );
  }

  onSubmit() {
    this.successMessage = '';

    if (this.askQuestionForm.valid) {
      console.log(this.askQuestionForm.value);

      this.askQuestionForm.setValue({ title: '', body: '', category: '' });
      this.successMessage = 'Your question has been successfully submitted!';
    }
  }
}
