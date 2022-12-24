'use strict';

// AND & OR logical operators.
// How to use them for short circuit.
// Until now, we used && and ||  to combine boolean values.
// We can do more than that with these logical operators.

// OR (||)

// Non-boolean values as operands.
console.log(3 || 'Antoan'); // output: 3

// The result of the OR operator does NOT always have to be a boolean.

// There are three properties about logical operators.
// 1. They can use ANY data type.
// 2. They can return ANY data type.
// 3. They do 'short-circuiting'(short-circuit evaluation).

// used 2 values that are not booleans, returned a value that was not a boolean.
console.log(3 || 'Antoan'); // output: 3
// About short circuit evaluation, in the case of the OR operator,
// short circuiting means that if one of the given value is a truthy value,
// it will immediately return that value, not caring about the rest values.

// If no one of the given values is a truthy value, it will return the last one.

const x = false || 0 || ''; // output: '' (empty string) /last value/
console.log(x);
