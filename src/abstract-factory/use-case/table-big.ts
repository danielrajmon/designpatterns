import { Table } from './table';

export default class BigTable extends Table {
  constructor() {
    super();
    this.name = 'BigTable';
    this.width = 80;
    this.height = 80;
    this.depth = 80;
  }
}
