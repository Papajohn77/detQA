import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SearchService {
  public searchTerm = new Subject<string>();

  constructor() {}

  setSearchTerm(searchTerm: string) {
    this.searchTerm.next(searchTerm);
  }
}
