import Prototype from './prototype-interface';

export default class Document implements Prototype {
  name: string;
  array: [number[], number[]];

  constructor(name: string, array: [number[], number[]]) {
    this.name = name;
    this.array = array;
  }

  clone(): Document {
    const array = JSON.parse(JSON.stringify(this.array));

    return new Document(this.name, array);
  }
}
