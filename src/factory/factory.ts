interface ProductInterface {
  name: string;
}

class ConcreteProduct implements ProductInterface {
  name = '';
}

class ConcreteProductA extends ConcreteProduct {
  constructor() {
    super();
    this.name = 'ConcreteProductA';
  }
}

class ConcreteProductB extends ConcreteProduct {
  constructor() {
    super();
    this.name = 'ConcreteProductB';
  }
}

class Creator {
  static createObject(someProperty: string): ProductInterface {
    if (someProperty === 'a') {
      return new ConcreteProductA();
    } else {
      return new ConcreteProductB();
    }
  }
}

const product = Creator.createObject('b');
console.log(product.name);
