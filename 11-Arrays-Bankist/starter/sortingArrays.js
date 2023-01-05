'use strict';

// Strings
const owners = ['Jonas', 'Zac', 'Antoan', 'Martha'];
console.log(owners.sort()); // alphabetically sorted [A-Z].
// .sort() method MUTATES THE ORIGINAL ARRAY.
console.log(owners);

// Numbers
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort
// https://asecuritysite.com/coding/asc2 - comparing in UTF-16 code units order
console.log(movements);
console.log(movements.sort()); // NOT WHAT WE EXPECTED...
console.log(movements);
// The numbers are not at all ordered in any way.
// Reason for this is that the sort method does the sorting BASED on strings.
// That's how sort works by default. !!!!
// What sort did with these numbers, is basically,
// to convert everything to strings and then it does the sorting itself.

// !!!
// We can change the default behaviour of sort, by passing a compareFn(callback)

const movements1 = [200, 450, -400, 3000, -650, -130, 70, 1300];

// params -> The first and second element for comparison, IN OTHER WORDS
// a -> the current value, b -> next value.
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort#description
const compareFnAsc = function (a, b) {
  // KEEP ORDER/NUMS
  // return < 0| A, B 200 - 450 -> -250, meaning, A is less than B, so sort A, B

  // SWITCH ORDER/NUMS
  // return > 0| B, A

  // KEEP ORIGINAL ORDER
  // return === 0 | keep original order of A and B
  return a - b;
};

const compareFnDesc = (a, b) => b - a;

movements1.sort(compareFnAsc);
console.log(movements1);
movements1.sort(compareFnDesc);
console.log(movements1);
