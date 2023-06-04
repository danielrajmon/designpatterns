class Product {
  parts: string[] = [];
}

interface BuilderInterface {
  buildPartA(): this;
  buildPartB(): this;

  getResult(): Product;
}

class Builder implements BuilderInterface {
  product: Product;

  constructor() {
    this.product = new Product();
  }

  buildPartA() {
    this.product.parts.push('a');
    return this;
  }

  buildPartB() {
    this.product.parts.push('b');
    return this;
  }

  getResult() {
    return this.product;
  }
}

class Director {
  static construct() {
    return new Builder().buildPartA().buildPartB().getResult();
  }
}

const product1 = Director.construct();
console.log(product1.parts);
