"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Player = void 0;
class Player {
    constructor() {
        this.hand = [];
    }
    addCard(card) {
        this.hand.push(card);
    }
    getScore() {
        let score = 0;
        let aces = 0;
        for (let card of this.hand) {
            if (card.getRank() === 'A') {
                aces++;
            }
            else if (['K', 'Q', 'J'].includes(card.getRank())) {
                score += 10;
            }
            else {
                score += parseInt(card.getRank(), 10);
            }
        }
        while (aces > 0 && score > 21) {
            score -= 10;
            aces--;
        }
        return score;
    }
    printCards(showAllCards = false) {
        for (let i = 0; i < this.hand.length; i++) {
            if (i === 0 && !showAllCards) {
                console.log('  <hidden>');
            }
            else {
                console.log(`  ${this.hand[i].getRank()} of ${this.hand[i].getSuit()}`);
            }
        }
        console.log(`  Score: ${this.getScore()}`);
    }
}
exports.Player = Player;
