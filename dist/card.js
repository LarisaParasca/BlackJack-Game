"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Card = void 0;
class Card {
    constructor(suit, rank) {
        if (!Card.suits.includes(suit)) {
            throw new Error(`Invalid suit: ${suit}`);
        }
        if (!Card.ranks.includes(rank)) {
            throw new Error(`Invalid rank: ${rank}`);
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
    getValue() {
        if (this.rank === 'Ace') {
            return 11;
        }
        else if (['Jack', 'Queen', 'King'].includes(this.rank)) {
            return 10;
        }
        else {
            return parseInt(this.rank, 10);
        }
    }
}
Card.suits = ['hearts', 'diamonds', 'clubs', 'spades'];
Card.ranks = [
    'Ace', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'Jack', 'Queen', 'King',
];
exports.Card = Card;
