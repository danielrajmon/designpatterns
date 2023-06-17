export interface ValueInterface {
  value: number;
}
class _Value implements ValueInterface {
  value: number;
  constructor(value: number) {
    this.value = value;
  }
}

export default function Value(value: number): ValueInterface {
  return new _Value(value);
}
