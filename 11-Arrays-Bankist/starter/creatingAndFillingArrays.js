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

// !
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/from
// !

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Indexed_collections
// https://daily.dev/blog/why-do-you-need-to-know-about-array-like-objects
const y = Array.from({length: 4}, () => 1);

// What if we wanted to recreate the array from our first example [1,2,3,4]?
// we are using from method on Array CONSTRUCTOR
console.log(y);

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/from
const z = Array.from({length: 4}, (_, index) => index + 1);
console.log(z);
console.log(Array.prototype);

// Check
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/of
// check method on the left side, these which are executed on the Array itself.
// And these which are executed on the Array prototype.
// There is a difference between them.
// The methods on prototype are executed on already created arrays. arr.sort()
// the other methods are executed on the Array itself. Array.from()
