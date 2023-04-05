import { Player } from "./player"; 
import { Deck } from "./deck";
import * as readline from 'readline';

export class Game {
    private deck: Deck;
    private player: Player;
    private dealer: Player;
    private input: readline.Interface;
    private balance : number;
    private bet : number;
  
    constructor() {
      this.deck = new Deck();
      this.player = new Player();
      this.dealer = new Player();
      this.balance = 1000; 
      this.bet = 1;
      this.input = readline.createInterface({
        input: process.stdin,
        output: process.stdout
      });
    }
  
    public start(): void { // starts the game and ask the player if he proceeds with a bet
        console.log('Starting the game...');
        this.input.question('Your balance is now ' + this.balance + ' EUR. Do you want to place a bet (y/n)', (answer: string) => {
        if (answer === 'y' && this.balance > 0) {
         this.play();
         } else if (answer === 'n') {
         console.log('See you again next time!');
         this.input.close();
        }
      }); 
    }
    
    public play() : void { 
      this.gameReset(); // resets both player and dealer hands
      this.balance -= this.bet; //subtract the bet placed
      console.log('Your balance is now ' + this.balance + ' EUR'); // showing updated balance
      this.deck.shuffle(); // 
      this.dealer.addCard(this.deck.drawCard()); 
      this.dealer.addCard(this.deck.drawCard());
      this.player.addCard(this.deck.drawCard());
      this.player.addCard(this.deck.drawCard());
  
      console.log('Player has:'); // shows cards
      this.player.printCards();
  
      console.log('Dealer has:');
      this.dealer.printCards(true);

      this.checkForBlackjack(); //check if either the player or dealer has the score = 21 

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
      this.player.addCard(this.deck.drawCard()); // add another card to the hand
  
      console.log('Player has:');
      this.player.printCards(); //shows the new available hand

      this.checkForBlackjack(); //check  blackjack

      if (this.player.getScore() > 21) { 
        console.log('Player busts!');
        this.end();
      } else {
      this.input.question('Do you want to hit or stand? (h/s)', (answer: string) => { //creating a continuos hit/stand question to be available multiple times
        if (answer === 'h') {
          this.hit();
        } else if (answer === 's') {
          this.stand();
        } else {
          console.log('Invalid input');
          this.hit();
        }
      });
    }
    }
  
    public stand(): void {
      while (this.dealer.getScore() < 17) {
        this.dealer.addCard(this.deck.drawCard()); //The dealer will always hit with a hand < 17.
      }

      console.log('Dealer has:');
      this.dealer.printCards(true);
  
      if (this.dealer.getScore() > 21) {
        console.log('Dealer busts!');
        this.balance += this.bet * 2;
      } else if (this.dealer.getScore() > this.player.getScore()) {
        console.log('Dealer wins!');
      } else if (this.player.getScore() > this.dealer.getScore()) {
        this.balance +=  this.bet * 2;
        console.log('Player wins!');
        console.log('You won ' + this.bet * 2 + ' EUR') //Player has won and therefore will net total stake * 2
      } else {
        console.log('It\'s a tie!');
        this.balance +=  this.bet ; //both the dealer and the player have the same value hand, the player will have their bet returned
      }
  
      this.end();
    }

    public checkForBlackjack(){
      if (this.player.getScore() == 21) {
        console.log('Player has hit BLACKJACK!');
        this.balance += this.bet * 2.5; //if the player has hit blackjack, then the player will receive a total stake *.2.5
        console.log('You won ' + this.bet * 2.5 + ' EUR');
        this.end();
      }
      else if (this.dealer.getScore() == 21) {
        console.log('Dealer has hit BLACKJACK!');
        this.end();
      }
     
    }

    public gameReset(){
        this.player.resetHand(); //empty pleayer hand
        this.dealer.resetHand(); // empty dealer hand
    }
  
    public end(): void {
      console.log('Game over!');
        this.input.question('Do you want to play again? (y/n)', (answer: string) => {
        if (answer === 'y') {
            this.start();  
         } else if (answer === 'n') {
           console.log('Thank you for playing!');
           this.input.close(); // cloeses readline communication
         }
     });
    }
}

