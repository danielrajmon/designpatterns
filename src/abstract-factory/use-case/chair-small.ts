import { Chair } from './chair';

export default class SmallChar extends Chair {
  constructor() {
    super();
    this.name = 'SmallChair';
    this.width = 15;
    this.height = 15;
    this.depth = 15;
  }
}
