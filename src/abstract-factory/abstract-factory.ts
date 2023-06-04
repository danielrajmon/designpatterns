import { FactoryA, ProductA } from './factory-a';
import { FactoryB, ProductB } from './factory-b';

interface Product extends ProductA, ProductB {}

class AbstractFactory {
  static createObject(factory: string): Product | undefined {
    try {
      if (['aa', 'ab'].indexOf(factory) > -1) {
        return FactoryA.getObject(factory[1]);
      }
      if (['ba', 'bb'].indexOf(factory) > -1) {
        return FactoryB.getObject(factory[1]);
      }
      throw new Error('No factory found');
    } catch (e) {
      console.log(e);
    }
  }
}

let product = AbstractFactory.createObject('ab');
console.log(product);

product = AbstractFactory.createObject('ba');
console.log(product);
