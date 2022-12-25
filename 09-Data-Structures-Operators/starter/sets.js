'use strict';

// Built-in data structures: Objects & Arrays, /Sets & Maps (ES6)/

// Set -> a collection of unique values. NO DUPLICATES.

const ordersSet = new Set(['Pasta', 'Pizza', 'Pizza', 'Rissoto', 'Pasta']);
console.log(ordersSet);

// Sets are also iterables.
// Order of set is irrelevant.

// Strings are also iterables.
const firstName = new Set('Antoan');
console.log(firstName);

// Size of set.
console.log(ordersSet.size);

console.log(ordersSet.has('Pasta'));
console.log(ordersSet.has('Bread'));

ordersSet.add('Garlic Bread');
ordersSet.delete('Rissoto');
console.log(ordersSet);

// There are NO indexes in Sets.
// There is NO way of getting values out of a set.

// The values in SET are:
// - UNIQUE
// - THEIR ORDER DOES NOT MATTER.

for (const item of ordersSet) console.log(item);

// Use-case: removing duplicates from arrays.
const staff = ['Waiter', 'Chef', 'Waiter', 'Manager', 'Chef', 'Waiter'];

// What if we need to know what positions there are?
// We would need unique arr aka set.

const staffUnique = new Set(staff);
console.log(staffUnique); // The three unique positions.
// What if we want the unique positions to be in an array ?

// Conversion from set to array.
const staffUniqueArray = [...staffUnique]; // spread op. works on all iterables
console.log(staffUniqueArray);

console.log(new Set('AntoanStefanov').size);

ordersSet.clear();
console.log(ordersSet);
