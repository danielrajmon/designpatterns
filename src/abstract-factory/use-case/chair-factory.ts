import { ChairInterface } from './chair';
import SmallChair from './chair-small';
import BigChair from './chair-big';

export default class ChairFactory {
  static getChair(chair: string): ChairInterface {
    if (chair === 'BigChair') {
      return new BigChair();
    } else if (chair === 'SmallChair') {
      return new SmallChair();
    } else {
      throw new Error('No chair found');
    }
  }
}
