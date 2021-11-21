import { Component, OnInit } from '@angular/core';
import { SearchService } from '../../../services/search.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
})
export class SearchComponent implements OnInit {
  searchTerm!: string;

  constructor(private searchService: SearchService) {}

  ngOnInit(): void {
    this.searchService.searchTerm.subscribe((data: string) => {
      this.searchTerm = data;
    });
  }

  setSearchTerm(searchTerm: string) {
    this.searchService.setSearchTerm(searchTerm);
  }
}
