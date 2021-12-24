import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-questions-pagination',
  templateUrl: './questions-pagination.component.html',
  styleUrls: ['./questions-pagination.component.css'],
})
export class QuestionsPaginationComponent implements OnInit {
  @Input() page!: number;
  @Input() hasNext!: boolean;

  constructor(private router: Router) {}

  ngOnInit(): void {}

  prevPage() {
    this.router.routeReuseStrategy.shouldReuseRoute = () => false;
    this.router.onSameUrlNavigation = 'reload';
    this.router.navigate(['/questions'], {
      queryParams: { page: this.page - 1 },
      queryParamsHandling: 'merge',
    });
  }

  nextPage() {
    this.router.routeReuseStrategy.shouldReuseRoute = () => false;
    this.router.onSameUrlNavigation = 'reload';
    this.router.navigate(['/questions'], {
      queryParams: { page: this.page + 1 },
      queryParamsHandling: 'merge',
    });
  }
}
