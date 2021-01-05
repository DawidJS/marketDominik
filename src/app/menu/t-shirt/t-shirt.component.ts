import {
  AfterViewInit,
  Component,
  ElementRef,
  OnInit,
  ViewChild,
} from '@angular/core';
import { NgScrollbar } from 'ngx-scrollbar';

@Component({
  selector: 'app-t-shirt',
  templateUrl: './t-shirt.component.html',
  styleUrls: ['./t-shirt.component.less'],
})
export class TShirtComponent implements AfterViewInit {
  @ViewChild('scroll') scrollbar: ElementRef | undefined;

  public tShirts: TShirt[] = [
    {
      id: '1',
      image: '../../../assets/shirt.png',
      name: 'T-SHIRT 1',
      tips: [
        {
          side: 'left',
          position: { x: -200, y: 70 },
          text: 'aaaa kolniezyk',
        },
        {
          side: 'right',
          position: { x: 50, y: 200 },
          text: 'zajebista lamowka',
        },
        {
          side: 'right',
          position: { x: 20, y: 400 },
          text: 'brzydkin napis',
        },
      ],
      description:
        'Lorem1111, ipsum dolor sit amet consectetur adipisicing elit. Excepturi ullam aspernatur qui possimus sapiente nobis libero ipsum eaque. Reiciendis iusto blanditiis non aut perspiciatis laboriosam voluptas voluptatem expedita itaque quidem!',
    },
    {
      id: '2',
      image: '../../../assets/shirt.png',
      name: 'T-SHIRT 2',

      tips: [
        {
          side: 'left',
          position: { x: -200, y: 70 },
          text: 'super napis1',
        },
        {
          side: 'right',
          position: { x: 170, y: 400 },
          text: 'ladny napis1',
        },
      ],
      description:
        'Lorem22222, ipsum dolor sit amet consectetur adipisicing elit. Excepturi ullam aspernatur qui possimus sapiente nobis libero ipsum eaque. Reiciendis iusto blanditiis non aut perspiciatis laboriosam voluptas voluptatem expedita itaque quidem!',
    },
    {
      id: '3',
      image: '../../../assets/shirt.png',
      name: 'T-SHIRT 3',
      tips: [
        {
          side: 'right',
          position: { x: 190, y: 250 },
          text: 'napis super 3',
        },
      ],
      description:
        'Lorem2333333, ipsum dolor sit amet consectetur adipisicing elit. Excepturi ullam aspernatur qui possimus sapiente nobis libero ipsum eaque. Reiciendis iusto blanditiis non aut perspiciatis laboriosam voluptas voluptatem expedita itaque quidem!',
    },
    {
      id: '4',
      image: '../../../assets/shirt.png',
      name: 'T-SHIRT 4',
      tips: [
        {
          side: 'left',
          position: { x: 20, y: 100 },
          text: 'bawelniany kolniezyk',
        },
        {
          side: 'right',
          position: { x: 50, y: 200 },
          text: 'zajebista lamowka',
        },
        {
          side: 'right',
          position: { x: 20, y: 400 },
          text: 'brzydkin napis',
        },
      ],
      description:
        'Lorem1111, ipsum dolor sit amet consectetur adipisicing elit. Excepturi ullam aspernatur qui possimus sapiente nobis libero ipsum eaque. Reiciendis iusto blanditiis non aut perspiciatis laboriosam voluptas voluptatem expedita itaque quidem!',
    },
    {
      id: '5',
      image: '../../../assets/shirt.png',
      name: 'T-SHIRT 5',
      tips: [
        {
          side: 'left',
          position: { x: 20, y: 100 },
          text: 'bawelniany kolniezyk',
        },
        {
          side: 'right',
          position: { x: 50, y: 200 },
          text: 'zajebista lamowka',
        },
        {
          side: 'right',
          position: { x: 20, y: 400 },
          text: 'brzydkin napis',
        },
      ],
      description:
        'Lorem1111, ipsum dolor sit amet consectetur adipisicing elit. Excepturi ullam aspernatur qui possimus sapiente nobis libero ipsum eaque. Reiciendis iusto blanditiis non aut perspiciatis laboriosam voluptas voluptatem expedita itaque quidem!',
    },
  ];

  ngAfterViewInit() {
    console.log('INit', this.scrollbar);
  }

  scrollTo = (back: boolean) => {
    if (this.scrollbar)
      this.scrollbar.nativeElement.scrollBy({ left: back ? -80 : 80 });
  };

  currentTShirt?: TShirt = this.tShirts[1];

  constructor() {}

  trackByIndex = (index: number): number => index;
}

export interface TShirt {
  id: string;
  image: string;
  name: string;
  description: string;
  tips?: Tip[];
}

export interface Tip {
  position: { x: number; y: number };
  text: string;
  side: 'left' | 'right';
}
