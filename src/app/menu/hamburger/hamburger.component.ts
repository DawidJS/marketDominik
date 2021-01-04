import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hamburger',
  templateUrl: './hamburger.component.html',
  styleUrls: ['./hamburger.component.less'],
})
export class HamburgerComponent implements OnInit {
  show = false;

  constructor() {}

  ngOnInit(): void {}

  toggle() {
    this.show = !this.show;
    console.log(this.show);
  }
}
