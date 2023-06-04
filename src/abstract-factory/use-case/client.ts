import FurnitureFactory from './furniture-factory';

let furniture = FurnitureFactory.getFurniture('SmallChair');
console.log(furniture?.name);
console.log(furniture?.getDimensions());

furniture = FurnitureFactory.getFurniture('BigTable');
console.log(furniture?.name);
console.log(furniture?.getDimensions());
