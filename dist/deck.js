"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Deck = void 0;
const card_1 = require("./card");
class Deck {
    constructor() {
        this.cards = [];
        for (const suit of card_1.Card.suits) {
            for (const rank of card_1.Card.ranks) { // for each combination of suit and rank creates a new card
                this.cards.push(new card_1.Card(suit, rank)); // pushes the card into the card array
            }
        }
    }
    shuffle() {
        for (let i = this.cards.length - 1; i > 0; i--) { // iterate from lenght- 1 to 1
            const j = Math.floor(Math.random() * (i + 1)); // 0 <= j <= i
            [this.cards[i], this.cards[j]] = [this.cards[j], this.cards[i]]; // exchange a[j] and a[i] 
        }
    }
    drawCard() {
        if (this.cards.length === 0) {
            throw new Error('No cards left in deck');
        }
        return this.cards.pop();
        //If there are cards left in the deck, 
        //the method removes the last card from the cards array using the pop() method, which returns the removed card.
    }
}
exports.Deck = Deck;
