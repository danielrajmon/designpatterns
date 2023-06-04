import { ChairInterface } from './chair';
import ChairFactory from './chair-factory';
import { TableInterface } from './table';
import TableFactory from './table-factory';

interface FurnitureInterface extends ChairInterface, TableInterface {}

export default class FurnitureFactory {
  static getFurniture(furniture: string): FurnitureInterface | undefined {
    try {
      if (['SmallChair', 'BigChair'].indexOf(furniture) > -1) {
        return ChairFactory.getChair(furniture);
      }
      if (['SmallTable', 'BigTable'].indexOf(furniture) > -1) {
        return TableFactory.getTable(furniture);
      }
      throw new Error('No factory found');
    } catch (e) {
      console.log(e);
    }
  }
}
