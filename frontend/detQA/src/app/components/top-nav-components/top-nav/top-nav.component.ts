import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-top-nav',
  templateUrl: './top-nav.component.html',
  styleUrls: ['./top-nav.component.css'],
})
export class TopNavComponent implements OnInit {
  url = '/questions';

  constructor(private router: Router) {}

  ngOnInit(): void {}

  isQuestions(): boolean {
    return this.router.url === this.url;
  }
}
