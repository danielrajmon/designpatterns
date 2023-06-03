interface Product {
  name: string;
}

class ConcreteProduct implements Product {
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

class ConcreteProductC extends ConcreteProduct {
  constructor() {
    super();
    this.name = 'ConcreteProductC';
  }
}

class Creator {
  static createObject(someProperty: string): Product {
    if (someProperty === 'a') {
      return new ConcreteProductA();
    } else if (someProperty === 'b') {
      return new ConcreteProductB();
    } else {
      return new ConcreteProductC();
    }
  }
}

const product = Creator.createObject('b');
console.log(product.name);