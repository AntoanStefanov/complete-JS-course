'use strict';

const airline = 'TAP Air Portugal';
const plane = 'A320';

console.log(plane[0]);
console.log(plane[1]);
console.log('B737'[0]);
console.log(airline.length);
console.log('B636'.length);

// Methods
// Quite similar to array methods.

console.log(airline.indexOf('r')); // returns 6, first occurence
console.log(airline.lastIndexOf('r')); // returns 10, last occurence
console.log(airline.indexOf('Portugal')); // returns 8
console.log(airline.indexOf('portugal')); // returns -1, case-sensitive

// Why we need those indexes:
// Good use case is to extract part of a string using the slice method

console.log(airline.slice(4)); // 'Air Portugal' substr /start from 4(inclusive)

// slice does not affect the original string, strings are IMMUTABLE.(primitives)

// The strings methods always return a new string, to be saved in variable/ORw.e

console.log(airline.slice(4, 7)); // 'Air'| from 4(inclusive) to 7(exclusive)
// the length of the extracted string is always gonna be the end(7)-beginning(4)


