'use strict';

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/find
// retrieve element based on a condition.

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

// returns the first element in the array that satisfies the condition.
console.log(movements.find((movement) => movement > 1000));

// Find method
// const account = accounts.find((account) => account.owner === 'Jessica Davis');
// console.log(account);
