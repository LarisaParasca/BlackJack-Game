export class Card {
  static readonly suits = ['hearts', 'diamonds', 'clubs', 'spades'];
  static readonly ranks = [
    'Ace', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'Jack', 'Queen', 'King',
  ];

  public readonly suit: string;
  public readonly rank: string;

  constructor(suit: string, rank: string) {
    if (!Card.suits.includes(suit)) {
      throw new Error(`Invalid suit: ${suit}`);
    }
    if (!Card.ranks.includes(rank)) {
      throw new Error(`Invalid rank: ${rank}`);
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
