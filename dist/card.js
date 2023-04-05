"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Card = void 0;
class Card {
    constructor(suit, rank) {
        if (!Card.suits.includes(suit)) { // checks that the provided suit is valid by ensuring that is included in the suits
            throw new Error(`Invalid suit: ${suit}`);
        }
        if (!Card.ranks.includes(rank)) {
            throw new Error(`Invalid rank: ${rank}`); // checks that the provided rank is valid by ensuring that is included in the rank
        }
        this.suit = suit;
        this.rank = rank;
    }
    getSuit() {
        return this.suit;
    }
    getRank() {
        return this.rank;
    }
}
Card.suits = ['hearts', 'diamonds', 'clubs', 'spades']; // array definying the valid suits
Card.ranks = [
    'Ace', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'Jack', 'Queen', 'King',
]; // array definying the valid ranks
exports.Card = Card;
