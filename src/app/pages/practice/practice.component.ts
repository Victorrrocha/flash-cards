import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardsService } from 'src/app/cards/cards.service';
import { ActivatedRoute, Params } from '@angular/router';
import { CardInfo, Deck } from 'src/app/data/french-verbs';
import { CardComponent } from 'src/app/cards/card/card.component';

@Component({
  selector: 'app-practice',
  standalone: true,
  imports: [CommonModule, CardComponent],
  templateUrl: './practice.component.html',
  styleUrls: ['./practice.component.scss']
})
export class PracticeComponent implements OnInit{
  deck?: Deck;
  constructor(private cardsService: CardsService, private route: ActivatedRoute) {}
  currentCard?: CardInfo;

  ngOnInit(): void {
    this.route.params.subscribe((param: Params) => {
      const deck = param['id'];
      this.deck = this.cardsService.findDeckById(deck);
      this.currentCard = this.deck?.content[0];
      this.deck?.content.shift();
    })
  }

  nextCard() {
    if (this.deck && this.deck.content.length > 0) {
      this.currentCard = this.deck.content.shift();
    }
  }
}
