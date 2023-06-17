import { ValueInterface } from './value';

class _Sub implements ValueInterface {
  value: number;
  constructor(val1: ValueInterface | number, val2: ValueInterface | number) {
    const left = Object.prototype.hasOwnProperty.call(val1, 'value')
      ? (val1 as ValueInterface).value
      : (val1 as number);
    const right = Object.prototype.hasOwnProperty.call(val2, 'value')
      ? (val2 as ValueInterface).value
      : (val2 as number);
    this.value = left - right;
  }
}

export default function Sub(
  val1: ValueInterface | number,
  val2: ValueInterface | number
): ValueInterface {
  return new _Sub(val1, val2);
}
