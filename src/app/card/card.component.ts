import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
})
export class CardComponent implements OnInit {
  @Input() back: string;
  @Input() front: string;

  @Input() disabled: boolean;

  active: boolean;

  constructor() {
    this.active = false;
  }

  ngOnInit(): void {
  }

  handleClick(event: Event) {
    this.active = !this.active;
  }

}
