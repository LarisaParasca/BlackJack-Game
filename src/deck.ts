
import { Card } from "./card";
export class Deck {
    private cards: Card[];
  
    constructor() {
      this.cards = [];
      for (const suit of Card.suits) {
        for (const rank of Card.ranks) {
          this.cards.push(new Card(suit, rank));
        }
      }
    }
  
    public shuffle(): void {  
      for (let i = this.cards.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [this.cards[i], this.cards[j]] = [this.cards[j], this.cards[i]];
      }
    }
  
    public drawCard(): Card {
      if (this.cards.length === 0) {
        throw new Error('No cards left in deck');
      }
  
      return this.cards.pop()!;
    }
  }
  