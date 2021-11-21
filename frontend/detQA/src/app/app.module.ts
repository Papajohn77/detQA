import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

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
import { FilterButtonComponent } from './components/questions-components/filter-button/filter-button.component';

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
    FilterButtonComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
