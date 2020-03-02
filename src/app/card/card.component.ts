import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
})
export class CardComponent implements OnInit {
  @Input() id: number;

  @Input() back: string;
  @Input() front: string;

  @Input() disabled: boolean;

  @Output() flip = new EventEmitter<number>();

  active: boolean;

  constructor() {
    this.active = false;
  }

  ngOnInit(): void {
  }

  handleClick(event: Event) {
    event.stopPropagation();

    this.active = !this.active;

    this.flip.emit(this.id);
  }

}
