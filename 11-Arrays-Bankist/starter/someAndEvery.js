'use strict';

// some method
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

// EQUALITY!!! testing.
console.log(movements.includes(-130));
// true, if any value in the array is exactly equal to -130 ? true
// equality testing.

// What if we wanted to test for condition instead? Some method comes into play.

// CONDITION
// Let's say we would like to know, if there were any deposits on this account.
console.log(movements.some((movement) => movement > 0));
// A predicate function is a function that takes one value as input and
// returns true / false based on whether the value satisfies the condition.
// filter method also takes a predicate function.
// in this situation, the predicate function is also a callback function.

// any deposit above 5000?
console.log(movements.some((movement) => movement > 5000));

// Some method:
// Determines whether the specified callback function
// returns true for any element of an array.
// If any element satisfies the condition, some also returns true.

// Every method:
// If EVERY element satisfies the condition, every method also returns true.

console.log(movements.every((movement) => typeof movement === 'number'));
console.log(movements.every((movement) => movement > 0));

// Separate callback
const deposit = (movement) => movement > 0;
console.log(movements.some(deposit));
console.log(movements.every(deposit));
console.log(movements.filter(deposit));
