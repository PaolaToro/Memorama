import { Component } from '@angular/core';
import { CardComponent } from './card/card.component';

import shuffleArray from './helpers/shuffle-array';

const BASE_ASSET_PATH = 'assets';

const COVER_ASSET = 'tapa.jpg';

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
  'thor.jpg'
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

  // The size of the `HEROES_ASSETS` should be the half of `rows` * `columns`
  rows = 5;
  columns = 4;

  matrix: Card[][];

  constructor() {
    this.matrix = this.generateCards();
  }

  generateCards = (): Card[][] => {
    const matrix = [];

    // The card assets are the doubles of cards
    const cardsAssets = [].concat(HEROES_ASSETS, HEROES_ASSETS);

    // The carsd is a array of resources where the back is a constant
    // and the front is an image of a heroe
    const cards = new Array(this.rows * this.columns)
        .fill({})
        .map((_, i) => {
          return ({
            back: `${BASE_ASSET_PATH}/${COVER_ASSET}`,
            front: `${BASE_ASSET_PATH}/${cardsAssets[i]}`
          });
        });

    // The shuffle cards are the same cards but randomly mixed
    const shuffledCards = shuffleArray(cards);

    // We use the control index for know where in the shuffle cards we are
    let controlIndex = 0;
    for (let i = 0; i < this.rows; i++) {
      if (!matrix[i]) {
        matrix[i] = [];
      }
      for (let j = 0; j < this.columns; j++) {
        matrix[i][j] = shuffledCards[controlIndex];
        controlIndex++;
      }
    }

    return matrix;
  }
}
