import House from './house';
import HouseBuilder from './house-builder';

export default class DirectorFlat {
  static construct(): House {
    return new HouseBuilder()
      .setBuildingType('flat')
      .setNumberOfDoors(4)
      .getResult();
  }
}
