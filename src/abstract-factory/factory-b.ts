export interface ProductB {
  name: string;
}

class ConcreteProduct implements ProductB {
  name = '';
}

class ConcreteProductA extends ConcreteProduct {
  constructor() {
    super();
    this.name = 'FactoryB:ConcreteProductA';
  }
}

class ConcreteProductB extends ConcreteProduct {
  constructor() {
    super();
    this.name = 'FactoryB:ConcreteProductB';
  }
}

export class FactoryB {
  static getObject(some_property: string): ProductB {
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
