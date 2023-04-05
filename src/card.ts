export class Card {
  static readonly suits = ['hearts', 'diamonds', 'clubs', 'spades'];  // array definying the valid suits
  static readonly ranks = [
    'Ace', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'Jack', 'Queen', 'King',
  ]; // array definying the valid ranks

  public readonly suit: string;
  public readonly rank: string;

  constructor(suit: string, rank: string) {
    if (!Card.suits.includes(suit)) { // checks that the provided suit is valid by ensuring that is included in the suits
      throw new Error(`Invalid suit: ${suit}`);
    }
    if (!Card.ranks.includes(rank)) {
      throw new Error(`Invalid rank: ${rank}`); // checks that the provided rank is valid by ensuring that is included in the rank
    }

    this.suit = suit;
    this.rank = rank;
  }

  public getSuit(): string {
    return this.suit;
  }

  public getRank(): string {
    return this.rank;
  }
}
