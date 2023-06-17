interface AdapterInterfaceA {
  methodA(): void;
}

class ClassA implements AdapterInterfaceA {
  methodA() {
    console.log('method A');
  }
}

interface AdapterInterfaceB {
  methodB(): void;
}

class ClassB implements AdapterInterfaceB {
  methodB() {
    console.log('method B');
  }
}

class ClassBAdapter implements AdapterInterfaceA {
  // ClassB does not have a methodA, so we can create an adapter

  #classB: ClassB;

  constructor() {
    this.#classB = new ClassB();
  }

  methodA() {
    'calls the class b method_b instead';
    this.#classB.methodB();
  }
}

// The client
// Before the adapter I need to test the objects class to know which method to call
const items = [new ClassA(), new ClassB()];
items.forEach((item) => {
  if (item instanceof ClassB) {
    item.methodB();
  } else {
    item.methodA();
  }
});

// After creating an adapter for ClassB I can reuse the same method signature as ClassA (preferred)
const adapted = [new ClassA(), new ClassBAdapter()];
adapted.forEach((item) => {
  item.methodA;
});
