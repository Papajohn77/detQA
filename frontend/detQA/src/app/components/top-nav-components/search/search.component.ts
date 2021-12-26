import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Suggestion } from '../../../models/Suggestion';
import { SuggestionsService } from '../../../services/suggestions.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
})
export class SearchComponent implements OnInit {
  searchTerm!: string;
  fetchedSuggestions!: Suggestion[];
  suggestions!: Suggestion[];

  constructor(
    private router: Router,
    private suggestionsService: SuggestionsService
  ) {}

  ngOnInit(): void {}

  updateSuggestions() {
    if (this.searchTerm.length < 2) {
      this.fetchedSuggestions = [];
      this.suggestions = this.fetchedSuggestions;
    } else if (this.searchTerm.length === 2) {
      this.suggestionsService
        .getSuggestions(this.searchTerm)
        .subscribe((suggestions) => {
          this.fetchedSuggestions = suggestions;
          this.suggestions = this.fetchedSuggestions;
        });
    } else {
      this.suggestions = this.fetchedSuggestions.filter((suggestion) =>
        suggestion.title.toLowerCase().startsWith(this.searchTerm.toLowerCase())
      );
    }
  }

  onSuggestionClick(title: string) {
    this.searchTerm = title;
    this.fetchedSuggestions = [];
    this.suggestions = [];
  }

  onSubmit() {
    this.router.routeReuseStrategy.shouldReuseRoute = () => false;
    this.router.onSameUrlNavigation = 'reload';
    this.router.navigate(['/questions'], {
      queryParams: { search: this.searchTerm },
      queryParamsHandling: 'merge',
    });

    this.searchTerm = '';
    this.fetchedSuggestions = [];
    this.suggestions = [];
  }
}
