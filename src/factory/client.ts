import ChairFactory from './chair-factory';

const chair = ChairFactory.getChair('SmallChair');

console.log(chair.getDimensions());
