import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hamburger-menu',
  templateUrl: './hamburger-menu.component.html',
  styleUrls: ['./hamburger-menu.component.css'],
})
export class HamburgerMenuComponent implements OnInit {
  isClicked!: boolean;
  isAnimated!: boolean;

  constructor() {}

  ngOnInit(): void {
    this.isClicked = false;
    this.isAnimated = false;
  }

  onClick() {
    this.isClicked = !this.isClicked;
    this.isAnimated = !this.isAnimated;
  }
}
