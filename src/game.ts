import { Player } from "./player"; 
import { Deck } from "./deck";
import * as readline from 'readline';

export class Game {
    private deck: Deck;
    private player: Player;
    private dealer: Player;
    private input: readline.Interface;
    private balance : number = 1000;
    private bet : number = 1;
  
    constructor() {
      this.deck = new Deck();
      this.player = new Player();
      this.dealer = new Player();
      this.input = readline.createInterface({
        input: process.stdin,
        output: process.stdout
      });
    }
  
    public start(): void {
      console.log('Starting the game...');
      this.input.question('Your balance is now ' +this.balance + ' EUR. Do you want to place a bet (y/n)', (answer: string) => {
        if (answer === 'y') {
         this.play();
         } else if (answer === 'n') {
         console.log('See you again next time!');
         this.input.close();

    }}); }
    
    public play() : void {
      this.balance -= this.bet;
      console.log('Your balance is now ' + this.balance + ' EUR');
      this.deck.shuffle();
      this.dealer.addCard(this.deck.drawCard());
      this.dealer.addCard(this.deck.drawCard());
      this.player.addCard(this.deck.drawCard());
      this.player.addCard(this.deck.drawCard());
  
     
  
      console.log('Player has:');
      this.player.printCards();
  
      console.log('Dealer has:');
      this.dealer.printCards(true);

     this.input.question('Do you want to hit or stand? (h/s)', (answer: string) => {
     if (answer === 'h') {
      this.hit();
      } else if (answer === 's') {
      this.stand();
      } else {
      console.log('Invalid input');
     
      }
      });


   
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
      this.dealer.printCards(true);
  
      if (this.dealer.getScore() > 21) {
        console.log('Dealer busts!');
      } else if (this.dealer.getScore() > this.player.getScore()) {
        console.log('Dealer wins!');
      } else if (this.player.getScore() > this.dealer.getScore()) {
        this.balance +=  this.bet * 2;
        console.log('Player wins!');
        console.log('Your balance is now ' + this.balance + ' EUR')
      } else {
        console.log('It\'s a tie!');
      }
  
      this.end();
    }
  
    public end(): void {
      console.log('Game over!');
    //   this.input.close();
    this.input.question('Do you want to play again? (y/n)', (answer: string) => {
        if (answer === 'y') {
            this.start();  
         } else if (answer === 'n') {
           console.log('Session ended');
         }
     });
    }


}

