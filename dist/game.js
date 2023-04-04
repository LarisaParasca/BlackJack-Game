"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Game = void 0;
const player_1 = require("./player");
const deck_1 = require("./deck");
const readline = __importStar(require("readline"));
class Game {
    constructor() {
        this.balance = 1000;
        this.bet = 1;
        this.deck = new deck_1.Deck();
        this.player = new player_1.Player();
        this.dealer = new player_1.Player();
        this.input = readline.createInterface({
            input: process.stdin,
            output: process.stdout
        });
    }
    start() {
        console.log('Starting the game...');
        this.input.question('Your balance is now ' + this.balance + ' EUR. Do you want to place a bet (y/n)', (answer) => {
            if (answer === 'y') {
                this.play();
            }
            else if (answer === 'n') {
                console.log('See you again next time!');
                this.input.close();
            }
        });
    }
    play() {
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
        this.input.question('Do you want to hit or stand? (h/s)', (answer) => {
            if (answer === 'h') {
                this.hit();
            }
            else if (answer === 's') {
                this.stand();
            }
            else {
                console.log('Invalid input');
            }
        });
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
        this.dealer.printCards(true);
        if (this.dealer.getScore() > 21) {
            console.log('Dealer busts!');
        }
        else if (this.dealer.getScore() > this.player.getScore()) {
            console.log('Dealer wins!');
        }
        else if (this.player.getScore() > this.dealer.getScore()) {
            this.balance += this.bet * 2;
            console.log('Player wins!');
            console.log('Your balance is now ' + this.balance + ' EUR');
        }
        else {
            console.log('It\'s a tie!');
        }
        this.end();
    }
    end() {
        console.log('Game over!');
        //   this.input.close();
        this.input.question('Do you want to play again? (y/n)', (answer) => {
            if (answer === 'y') {
                this.start();
            }
            else if (answer === 'n') {
                console.log('Session ended');
            }
        });
    }
}
exports.Game = Game;
