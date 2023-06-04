import { Table } from './table';

export default class SmallTable extends Table {
  constructor() {
    super();
    this.name = 'SmallTable';
    this.width = 40;
    this.height = 40;
    this.depth = 40;
  }
}
