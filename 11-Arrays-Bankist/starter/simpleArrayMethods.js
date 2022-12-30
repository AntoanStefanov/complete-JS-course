'use strict';

const currencies = new Map([
  ['USD', 'United States dollar'],
  ['EUR', 'Euro'],
  ['GBP', 'Pound sterling'],
]);

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

console.log(currencies.hasOwnProperty('length'));
console.log(movements.hasOwnProperty('length'));

const arr = ['a', 'b', 'c', 'd', 'e'];

// SLICE

let sliceCopyOfArr;

sliceCopyOfArr = arr.slice(2);
console.log(sliceCopyOfArr);

sliceCopyOfArr = arr.slice(2, 4); // output length array is 4 - 2, in this case.
console.log(sliceCopyOfArr);

sliceCopyOfArr = arr.slice(-1); // last el of an array.
console.log(sliceCopyOfArr);

sliceCopyOfArr = arr.slice(1, -2);
console.log(sliceCopyOfArr);

// We can use the slice method to simply create a SHALLOW copy of any array.
sliceCopyOfArr = arr.slice();
console.log(sliceCopyOfArr);
// Same as
console.log([...arr]);

// Spread operator or slice() for creating SHALLOW copy?
// ENTIRELY UP TO ME. Personal preference.

// The only time u really need the slice method is when
// u want to chain multiple methods together.calling them one after the other

// SPLICE
