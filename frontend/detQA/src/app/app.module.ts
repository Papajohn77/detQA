import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { TopNavComponent } from './components/top-nav-components/top-nav/top-nav.component';
import { HamburgerMenuComponent } from './components/top-nav-components/hamburger-menu/hamburger-menu.component';
import { SearchComponent } from './components/top-nav-components/search/search.component';
import { MainQuestionsComponent } from './components/questions-components/main-questions/main-questions.component';
import { QuestionsHeadingComponent } from './components/questions-components/questions-heading/questions-heading.component';
import { QuestionsContainerComponent } from './components/questions-components/questions-container/questions-container.component';
import { QuestionsPaginationComponent } from './components/questions-components/questions-pagination/questions-pagination.component';
import { QuestionComponent } from './components/questions-components/question/question.component';
import { MainAskQuestionComponent } from './components/ask-question-components/main-ask-question/main-ask-question.component';
import { AskQuestionHeadingComponent } from './components/ask-question-components/ask-question-heading/ask-question-heading.component';
import { AskQuestionFormComponent } from './components/ask-question-components/ask-question-form/ask-question-form.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { MainAboutComponent } from './components/about/main-about/main-about.component';
import { AboutHeadingComponent } from './components/about/about-heading/about-heading.component';
import { AboutContentComponent } from './components/about/about-content/about-content.component';
import { MainViewQuestionComponent } from './components/view-question-components/main-view-question/main-view-question.component';
import { ViewQuestionHeadingComponent } from './components/view-question-components/view-question-heading/view-question-heading.component';
import { QuestionContainerComponent } from './components/view-question-components/question-container/question-container.component';
import { AnswersContainerComponent } from './components/view-question-components/answers-container/answers-container.component';
import { AnswerComponent } from './components/view-question-components/answer/answer.component';
import { PostAnswerFormComponent } from './components/view-question-components/post-answer-form/post-answer-form.component';

@NgModule({
  declarations: [
    AppComponent,
    TopNavComponent,
    HamburgerMenuComponent,
    SearchComponent,
    MainQuestionsComponent,
    QuestionsHeadingComponent,
    QuestionsContainerComponent,
    QuestionsPaginationComponent,
    QuestionComponent,
    MainAskQuestionComponent,
    AskQuestionHeadingComponent,
    AskQuestionFormComponent,
    PageNotFoundComponent,
    AboutHeadingComponent,
    MainAboutComponent,
    AboutContentComponent,
    MainViewQuestionComponent,
    ViewQuestionHeadingComponent,
    QuestionContainerComponent,
    AnswersContainerComponent,
    AnswerComponent,
    PostAnswerFormComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
