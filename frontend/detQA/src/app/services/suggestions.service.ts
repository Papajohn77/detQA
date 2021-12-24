import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Suggestion } from '../models/Suggestion';
import { environment, Endpoint } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class SuggestionsService {
  private suggestionsUrl = `${environment.baseUrl}/${Endpoint.Suggestions}`;

  constructor(private http: HttpClient) {}

  getSuggestions(searchTerm: string): Observable<Suggestion[]> {
    return this.http.get<Suggestion[]>(
      `${this.suggestionsUrl}?search=${searchTerm}`
    );
  }
}
