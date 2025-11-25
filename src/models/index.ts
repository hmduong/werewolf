export class Effect {
  constructor() {}
}

export class Card {
  player: Player | null;
  priority: number;
  icon: string;
  thumb: string;

  constructor() {
    this.player = null;
    this.priority = 0;
    this.icon = "";
    this.thumb = "";
  }

  execute(players: Player[]): void {
    // logic xử lý
  }
}

export class Player {
  card: Card | null;
  effects: Effect[];
  name: string;

  constructor() {
    this.card = null;
    this.effects = [new Effect()];
    this.name = "";
  }

  setCard(card: Card): void {
    // Gán card cho player nếu card chưa có owner
    if (!card.player) {
      this.card = card;
      card.player = this;
    }
  }
}

export class Game {
  players: Player[];
  cards: Card[];

  constructor(template?: { cards?: Card[] }) {
    this.players = [];
    this.cards = template?.cards ?? [];
  }

  addPlayer(player: Player): void {
    this.players.push(player);
  }

  addCard(card: Card): void {
    this.cards.push(card);
  }
}
