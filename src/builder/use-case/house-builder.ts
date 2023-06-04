import House from './house';

interface HouseBuilderInterface {
  house: House;
  setBuildingType(buildingType: string): this;
  setNumberOfDoors(number: number): this;
  getResult(): House;
}

export default class HouseBuilder implements HouseBuilderInterface {
  house: House;

  constructor() {
    this.house = new House();
  }

  setBuildingType(buildingType: string): this {
    this.house.buildingType = buildingType;
    return this;
  }

  setNumberOfDoors(number: number): this {
    this.house.doors = number;
    return this;
  }

  getResult(): House {
    return this.house;
  }
}
