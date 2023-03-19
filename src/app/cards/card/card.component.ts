import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardInfo } from 'src/app/data/french-verbs';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent {
  facingFront = false;
  @Output() nextCard = new EventEmitter<void>();
  @Input() card?: CardInfo;

  rotateCard() {
    this.facingFront = !this.facingFront;
  }

  next() {
    this.nextCard.emit();
  }
}
