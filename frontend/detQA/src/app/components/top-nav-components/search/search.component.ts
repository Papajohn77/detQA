import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SearchService } from '../../../services/search.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
})
export class SearchComponent implements OnInit {
  searchTerm!: string;

  constructor(private router: Router, private searchService: SearchService) {}

  ngOnInit(): void {
    this.searchService.searchTerm.subscribe((data: string) => {
      this.searchTerm = data;
    });
  }

  setSearchTerm(searchTerm: string) {
    this.searchService.setSearchTerm(searchTerm);
  }

  onSubmit() {
    this.router.routeReuseStrategy.shouldReuseRoute = () => false;
    this.router.onSameUrlNavigation = 'reload';
    this.router.navigate(['/questions'], {
      queryParams: { search: this.searchTerm },
      queryParamsHandling: 'merge',
    });

    this.searchTerm = '';
  }
}
