import { TableInterface } from './table';
import SmallTable from './table-small';
import BigTable from './table-big';

export default class TableFactory {
  static getTable(table: string): TableInterface {
    if (table === 'BigTable') {
      return new BigTable();
    } else if (table === 'SmallTable') {
      return new SmallTable();
    } else {
      throw new Error('No table found');
    }
  }
}
