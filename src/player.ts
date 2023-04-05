
import { Card } from "./card";

export class Player {
    private hand: Card[];
  
    constructor() {
      this.hand = [];
    }
  
    public addCard(card: Card): void {
      this.hand.push(card);
    }
  
    public getScore(): number { // method to calculate the score
    
      let score: number = 0; // score starts at 0
      let aces: number = 0; // aces number starts at 0
      
      for (let card of this.hand) {  

        if (card.getRank() === 'Ace') {
          aces++;
          score += 11; // If there are any Aces in the hand, the method increases the aces variable and adds 11 to the score
        } else if (['King', 'Queen', 'Jack'].includes(card.getRank())) {
          score += 10; // If there are any K,Q,J cards, score increases by 10
        } else {
          score += parseInt(card.getRank(), 10); // all the other cards are true to value
        }
      }
  
      while (aces > 0 && score > 21) { // if the aces present caused the score to go over 21, ace will be transformed into a value of 1 insted of 11
        score -= 10;
        aces--;
      }
  
      return score;
    }
  
    public printCards(dealer : boolean = false): void {
      for (let i = 0; i < this.hand.length; i++) {
        if (i === 0 && dealer) {
          console.log('  <hidden>'); // hides the first dealer's card
        } else {
          console.log(`  ${this.hand[i].getRank()} of ${this.hand[i].getSuit()}`);
        }
      }
  
      console.log(`  Score: ${this.getScore()}`);
    }

     public resetHand(): void {
        this.hand = []; //empty cards from hand array
      }
  }
  