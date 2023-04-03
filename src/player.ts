
import { Card } from "./Card";


export class Player {
    private hand: Card[];
  
    constructor() {
      this.hand = [];
    }
  
    public addCard(card: Card): void {
      this.hand.push(card);
    }
  
    public getScore(): number {
      let score: number = 0;
      let aces: number = 0;
  
      for (let card of this.hand) {
        if (card.getRank() === 'A') {
          aces++;
        } else if (['K', 'Q', 'J'].includes(card.getRank())) {
          score += 10;
        } else {
          score += parseInt(card.getRank(), 10);
        }
      }
  
      while (aces > 0 && score > 21) {
        score -= 10;
        aces--;
      }
  
      return score;
    }
  
    public printCards(showAllCards: boolean = false): void {
      for (let i = 0; i < this.hand.length; i++) {
        if (i === 0 && !showAllCards) {
          console.log('  <hidden>');
        } else {
          console.log(`  ${this.hand[i].getRank()} of ${this.hand[i].getSuit()}`);
        }
      }
  
      console.log(`  Score: ${this.getScore()}`);
    }
  }
  