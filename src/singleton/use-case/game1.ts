import Leaderboard from './leaderboard';
import Game from './game-interface';

export class Game1 implements Game {
  leaderboard: Leaderboard;

  constructor() {
    this.leaderboard = new Leaderboard();
  }

  addWinner(position: number, name: string): void {
    this.leaderboard.addWinner(position, name);
  }
}
