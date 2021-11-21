import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainQuestionsComponent } from './components/questions-components/main-questions/main-questions.component';

const routes: Routes = [
  { path: 'questions', component: MainQuestionsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
