import { a, b } from './First.js';
import { c, d } from './Second.js';
import { e, f } from './Third.js';

function test() {
  console.log(a);
  b();
  console.log(c);
  d();
  console.log(e);
  f();
}

test();
