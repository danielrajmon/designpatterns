import { dimension } from './dimension';

export interface TableInterface {
  name: string;
  width: number;
  height: number;
  depth: number;

  getDimensions(): dimension;
}

export class Table implements TableInterface {
  name = '';
  width = 0;
  height = 0;
  depth = 0;

  getDimensions(): dimension {
    return {
      width: this.width,
      height: this.height,
      depth: this.depth
    };
  }
}
