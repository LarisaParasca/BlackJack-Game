"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Game = void 0;
const Player_1 = require("./Player");
const Deck_1 = require("./Deck");
class Game {
    constructor() {
        this.deck = new Deck_1.Deck();
        this.player = new Player_1.Player();
        this.dealer = new Player_1.Player();
    }
    start() {
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
    hit() {
        this.player.addCard(this.deck.drawCard());
        console.log('Player has:');
        this.player.printCards();
        if (this.player.getScore() > 21) {
            console.log('Player busts!');
            this.end();
        }
    }
    stand() {
        while (this.dealer.getScore() < 17) {
            this.dealer.addCard(this.deck.drawCard());
        }
        console.log('Dealer has:');
        this.dealer.printCards();
        if (this.dealer.getScore() > 21) {
            console.log('Dealer busts!');
        }
        else if (this.dealer.getScore() > this.player.getScore()) {
            console.log('Dealer wins!');
        }
        else if (this.player.getScore() > this.dealer.getScore()) {
            console.log('Player wins!');
        }
        else {
            console.log('It\'s a tie!');
        }
        this.end();
    }
    end() {
        console.log('Game over!');
    }
}
exports.Game = Game;
