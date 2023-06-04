import { Game1 } from './game1';
import { Game2 } from './game2';

const game1 = new Game1();
game1.addWinner(2, 'Player1');

const game2 = new Game2();
game2.addWinner(3, 'Player2');

game1.leaderboard.print();
game2.leaderboard.print();
