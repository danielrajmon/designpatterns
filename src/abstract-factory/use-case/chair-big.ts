import { Chair } from './chair';

export default class BigChair extends Chair {
  constructor() {
    super();
    this.name = 'BigChair';
    this.width = 30;
    this.height = 30;
    this.depth = 30;
  }
}
