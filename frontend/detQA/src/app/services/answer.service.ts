import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { retry } from 'rxjs/operators';
import { Answer } from '../models/Answer';
import { environment, Endpoint } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class AnswerService {
  private answersUrl = `${environment.baseUrl}/${Endpoint.Answers}`;

  private answerUrl = `${environment.baseUrl}/${Endpoint.Answer}`;
  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  };

  constructor(private http: HttpClient) {}

  getAnswers(questionId: number): Observable<Answer[]> {
    return this.http.get<Answer[]>(`${this.answersUrl}?id=${questionId}`);
  }

  postAnswer(answer: any): Observable<any> {
    return this.http
      .post(this.answerUrl, answer, this.httpOptions)
      .pipe(retry(3));
  }
}
