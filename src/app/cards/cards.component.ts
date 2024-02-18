import { Component } from '@angular/core';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrl: './cards.component.css'
})
export class CardsComponent {
  cards = [
    {
      title: 'Card 1',
      img: 'https://picsum.photos/200/300',
      desc: 'Description 1'
    },
    {
      title: 'Card 2',
      img: 'https://picsum.photos/200/300',
      desc: 'Description 2'
    },
    {
      title: 'Card 3',
      img: 'https://picsum.photos/200/300',
      desc: 'Description 3'
    },
    {
      title: 'Card 4',
      img: 'https://picsum.photos/200/300',
      desc: 'Description 4'
    }
  ]
}
