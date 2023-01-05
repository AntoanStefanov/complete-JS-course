'use strict';

// so far, we did this:
const a = [1, 2, 3, 4];
console.log(a);
// basically, we already have all needed data.
// and therefore, we could manually create the array.

// However, we can actually also generate arrays programatically,
// so without having to define all the items manually.
// There are many situations where this is necessary.
// And there are also multiple ways of doing it.

// EMPTY ARRAYS WITH FILL METHOD

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Array
const x = new Array(7); // creates a new array, with 7 empty elements(undefined)
console.log(x);

// There is one method that we can be useful with the empty array. fill
x.fill(1);
// x.fill(1, 3);
// x.fill(1, 3, -1);
console.log(x);

a.fill(23, 1, 3);
console.log(a);
