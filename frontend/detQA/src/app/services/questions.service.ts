import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { retry } from 'rxjs/operators';
import { Question } from '../models/Question';
import { environment, Endpoint } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class QuestionsService {
  private questionsUrl = `${environment.baseUrl}/${Endpoint.Questions}`;

  private questionUrl = `${environment.baseUrl}/${Endpoint.Question}`;
  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  };

  constructor(private http: HttpClient) {}

  getQuestions(page: number, searchTerm: string): Observable<Question[]> {
    if (searchTerm) {
      return this.http.get<Question[]>(
        `${this.questionsUrl}?page=${page}&search=${searchTerm}`
      );
    } else {
      return this.http.get<Question[]>(`${this.questionsUrl}?page=${page}`);
    }
  }

  getQuestion(id: number): Observable<Question> {
    return this.http.get<Question>(`${this.questionUrl}?id=${id}`);
  }

  postQuestion(question: any): Observable<any> {
    return this.http
      .post(this.questionUrl, question, this.httpOptions)
      .pipe(retry(3));
  }
}
