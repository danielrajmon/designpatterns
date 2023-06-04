export interface ProductA {
  name: string;
}

class ConcreteProduct implements ProductA {
  name = '';
}

class ConcreteProductA extends ConcreteProduct {
  constructor() {
    super();
    this.name = 'FactoryA:ConcreteProductA';
  }
}

class ConcreteProductB extends ConcreteProduct {
  constructor() {
    super();
    this.name = 'FactoryA:ConcreteProductB';
  }
}

export class FactoryA {
  static getObject(some_property: string): ProductA {
    try {
      if (some_property === 'a') {
        return new ConcreteProductA();
      } else if (some_property === 'b') {
        return new ConcreteProductB();
      } else {
        throw new Error('Class not found');
      }
    } catch (e) {
      console.log(e);
    }
    return new ConcreteProduct();
  }
}
