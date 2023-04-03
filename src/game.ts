
import { Player } from "./Player";
import { Deck } from "./Deck";



export class Game {
    private deck: Deck;
    private player: Player;
    private dealer: Player;
  
    constructor() {
      this.deck = new Deck();
      this.player = new Player();
      this.dealer = new Player();
    }
  
    public start(): void {
      console.log('Starting the game...');
      this.deck.shuffle();
  
      this.player.addCard(this.deck.drawCard());
      this.player.addCard(this.deck.drawCard());
  
      this.dealer.addCard(this.deck.drawCard());
      this.dealer.addCard(this.deck.drawCard());
  
      console.log('Player has:');
      this.player.printCards();
  
      console.log('Dealer has:');
      this.dealer.printCards(true);
    }
  
    public hit(): void {
      this.player.addCard(this.deck.drawCard());
  
      console.log('Player has:');
      this.player.printCards();
  
      if (this.player.getScore() > 21) {
        console.log('Player busts!');
        this.end();
      }
    }
  
    public stand(): void {
      while (this.dealer.getScore() < 17) {
        this.dealer.addCard(this.deck.drawCard());
      }
  
      console.log('Dealer has:');
      this.dealer.printCards();
  
      if (this.dealer.getScore() > 21) {
        console.log('Dealer busts!');
      } else if (this.dealer.getScore() > this.player.getScore()) {
        console.log('Dealer wins!');
      } else if (this.player.getScore() > this.dealer.getScore()) {
        console.log('Player wins!');
      } else {
        console.log('It\'s a tie!');
      }
  
      this.end();
    }
  
    public end(): void {
      console.log('Game over!');
    }
  }
  