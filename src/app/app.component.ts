import { Component } from '@angular/core';
import { CardComponent } from './card/card.component';

const BASE_ASSET_PATH = 'assets';

// this variable is readonly because it shouldn't mutate the
// content of the array
const HEROES_ASSETS: readonly string[] = [
  'antman.png',
  'avengers.jpg',
  'batman.jpg',
  'cap.jpg',
  'hulk.jpg',
  'ironman.jpg',
  'spiderman.jpg',
  'strange.jpg',
  'thanos.jpg',
  'thor.jpg',
];

interface Card {
  back: string;
  front: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Memorama';
  rows = 5;
  columns = 4;

  matrix: Card[][];

  constructor() {
    this.matrix = this.generateCards();
  }

  generateCards = (): Card[][] => {
    const matrix = [];

    for (let i = 0; i < this.rows; i++) {
      if (!matrix[i]) {
        matrix[i] = [];
      }

      for (let j = 0; j < this.columns; j++) {
        matrix[i][j] = { back: `${BASE_ASSET_PATH}/tapa.jpg`, front: `${BASE_ASSET_PATH}/batman.jpg` };
      }
    }

    return matrix;
  }
}
