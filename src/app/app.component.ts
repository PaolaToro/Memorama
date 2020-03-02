import { Component } from '@angular/core';
import { CardComponent } from './card/card.component';

import shuffleArray from './helpers/shuffle-array';

// each player have 1 minute to play
const INTERVAL_TIME = 60 * 1000;

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
  id: number;
  heroeId: number;
  active: boolean;
  disabled: boolean;
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

  timer = null;
  time = '00:00';

  start = false;
  disabled = false;

  player1 = 0;
  player2 = 0;

  // The size of the `HEROES_ASSETS` should be the half of `rows` * `columns`
  rows = 5;
  columns = 4;

  displayingCards = [];

  matrix: Card[][];

  constructor() {
    this.matrix = this.generateCards();
  }

  generateCards(): Card[][] {
    const matrix = [];

    const heroAssets = HEROES_ASSETS.map((src, index) => ({ src, id: index }));

    // The card assets are the doubles of cards
    const cardsAssets = [].concat(heroAssets, heroAssets);

    // The carsd is a array of resources where the back is a constant
    // and the front is an image of a heroe
    const cards: Card[] = new Array(this.rows * this.columns)
        .fill({})
        .map((_, i) => {
          const asset = cardsAssets[i];
          return ({
            id: i,
            heroeId: asset.id,
            active: false,
            disabled: false,
            back: `${BASE_ASSET_PATH}/${COVER_ASSET}`,
            front: `${BASE_ASSET_PATH}/${asset.src}`
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

  startGame(event: Event) {
    this.start = true;

    this.startTimer();
  }

  startTimer() {
    this.timer = setTimeout(() => { console.log('time finish'); }, INTERVAL_TIME);
  }

  flipCard(id: number) {
    this.matrix.forEach((row, rowId) => {
      row.forEach((column, columnId) => {
        if (column.id === id) {
          this.matrix[rowId][columnId].active = true;
        }
      });
    });
  }

  handleClickOnCard(id: number) {
    // If the game have start and we don't already clicked the card
    if (this.start && !this.displayingCards.includes(id)) {

      // We flip the card
      this.flipCard(id);

      // We add the card to the displaying control
      this.displayingCards.push(id);

      if (this.displayingCards.length > 1) {
        this.disabled = true;

      }

      // TODO: add the logic to decide what happen next
      console.log('Click', id);
    }
  }
}
