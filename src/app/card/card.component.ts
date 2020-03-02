import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
})
export class CardComponent implements OnInit {
  @Input() id: number;
  @Input() heroeId: number;

  @Input() active: boolean;

  @Input() disabled: boolean;

  @Input() back: string;
  @Input() front: string;

  @Output() flip = new EventEmitter<{ id: number, heroeId: number }>();

  ngOnInit(): void {
  }

  handleClick(event: Event) {
    event.stopPropagation();

    if (!this.disabled) {
      this.flip.emit({ id: this.id, heroeId: this.heroeId });
    }
  }

}
