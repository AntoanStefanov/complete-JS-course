'use strict';

const arr = [23, 11, 64];

console.log(arr[0]);
// Same as
console.log(arr.at(0));

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/at#description
// read 'Description' section.
console.log(arr.at(-1));

// at method useful when accessing last element / or method chaining.
// on the other hand, if u just want to quickly access a value from an array,
// for example, just the first element, I can keep using the bracket notation.

// At method also works on strings. just like the bracket notation
console.log('Antoan'[0]);
console.log('Antoan'.at(-1));

// console.log('assssaaasss'.replaceAll('s', 'z'));
