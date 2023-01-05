'use strict';

// One level of nesting.
const arr = [[1, 2, 3], [4, 5, 6], [7, 8, 9], [10, 11, 12], 13, 14];

// we 'flattened' the array.
console.log(arr.flat());

// Two level of nesting.
const arrDeep = [[[1, 2], 3], [[4, 5], 6], [7, 8, 9], [10, 11, 12], 13, 14];
console.log(arrDeep.flat());
console.log(arrDeep.flat(2)); // 2 is the depth level of nesting.

// flatMap is essentially a map method, but at the end it flattens the result.
