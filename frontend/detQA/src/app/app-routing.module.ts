import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainQuestionsComponent } from './components/questions-components/main-questions/main-questions.component';
import { MainAskQuestionComponent } from './components/ask-question-components/main-ask-question/main-ask-question.component';

const routes: Routes = [
  { path: 'questions', component: MainQuestionsComponent },
  { path: 'ask-question', component: MainAskQuestionComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
