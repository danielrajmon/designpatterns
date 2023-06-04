import House from './house';
import HouseBuilder from './house-builder';

export default class DirectorCastle {
  static construct(): House {
    return new HouseBuilder()
      .setBuildingType('castle')
      .setNumberOfDoors(100)
      .getResult();
  }
}
