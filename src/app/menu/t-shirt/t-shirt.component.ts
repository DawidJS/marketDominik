import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-t-shirt',
  templateUrl: './t-shirt.component.html',
  styleUrls: ['./t-shirt.component.less'],
})
export class TShirtComponent implements OnInit {
  number = 1;

  constructor() {}

  ngOnInit(): void {}

  // tslint:disable-next-line:typedef
  choseNumber(btnNumber: number) {
    this.number = btnNumber;
    console.log(this.number);
  }
}
