import { Injectable, OnInit } from '@angular/core';
import { Deck, FRENCH_VERBS_DECK } from '../data/french-verbs';

@Injectable({
  providedIn: 'root'
})
export class CardsService implements OnInit {
  decks: Deck[] = [FRENCH_VERBS_DECK];

  constructor() { }
  
  ngOnInit(): void {
    
  }

  get availableDecks() {
    return this.decks.map(deck => {
      return {
        id: deck.id,
        name: deck.name
      }
    });
  }

  public findDeckById(id: string) {
    return this.decks.find(deck => deck.id === id);
  }
}
