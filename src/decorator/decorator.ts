interface ComponentInterface {
  method(): string;
}

class Component implements ComponentInterface {
  method(): string {
    return 'Component Method';
  }
}

class Decorator implements ComponentInterface {
  #object: ComponentInterface;

  constructor(object: ComponentInterface) {
    this.#object = object;
  }

  method(): string {
    return `Decorator Method(${this.#object.method()})`;
  }
}

// The Client
const component = new Component();
console.log(component.method());

// The component can be decorated
const decorated = new Decorator(component);
console.log(decorated.method());

// The decorated component can be decorated again
const decorated2 = new Decorator(decorated);
console.log(decorated2.method());
