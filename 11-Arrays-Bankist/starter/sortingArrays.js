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
