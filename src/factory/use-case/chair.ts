import { dimension } from './dimension';

interface ChairInterface {
  height: number;
  width: number;
  depth: number;

  getDimensions(): dimension;
}

export default class Chair implements ChairInterface {
  width = 0;
  height = 0;
  depth = 0;

  createObject(): ChairInterface {
    return this;
  }

  getDimensions(): dimension {
    return {
      width: this.width,
      height: this.height,
      depth: this.depth
    };
  }
}
