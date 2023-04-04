"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Deck = void 0;
const card_1 = require("./card");
class Deck {
    constructor() {
        this.cards = [];
        for (const suit of card_1.Card.suits) {
            for (const rank of card_1.Card.ranks) {
                this.cards.push(new card_1.Card(suit, rank));
            }
        }
    }
    shuffle() {
        for (let i = this.cards.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [this.cards[i], this.cards[j]] = [this.cards[j], this.cards[i]];
        }
    }
    drawCard() {
        if (this.cards.length === 0) {
            throw new Error('No cards left in deck');
        }
        return this.cards.pop();
    }
}
exports.Deck = Deck;
