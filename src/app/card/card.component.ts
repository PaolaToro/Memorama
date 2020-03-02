import { Component, OnInit } from '@angular/core';

const BASE_ASSET_PATH = 'assets';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
})
export class CardComponent implements OnInit {

  active: boolean;

  back: string;
  front: string;

  constructor() {
    this.active = false;

    this.back = `${BASE_ASSET_PATH}/tapa.jpg`;
    this.front = `${BASE_ASSET_PATH}/batman.jpg`;
  }

  ngOnInit(): void {
  }

  handleClick(event: Event) {
    this.active = !this.active;
  }

}
