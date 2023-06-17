import Value from './value';
import Add from './add';
import Sub from './sub';

const A = Value(1);
const B = Value(2);

console.log(Add(A, B).value);
console.log(Sub(A, 100).value);
