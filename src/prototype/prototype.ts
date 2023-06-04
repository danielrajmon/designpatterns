interface Prototype {
  clone(): this;
}

class MyClass implements Prototype {
  field: number[];

  constructor(field: number[]) {
    this.field = field;
  }

  clone() {
    return JSON.parse(JSON.stringify(this));
  }
}

const object1 = new MyClass([1, 2, 3, 4]);
console.log(`object1: ${JSON.stringify(object1)}`);

const object2 = object1.clone();
console.log(`object2: ${JSON.stringify(object2)}`);
object2.field[1] = 101;

console.log(`object1: ${JSON.stringify(object1)}`);
console.log(`object2: ${JSON.stringify(object2)}`);
