'use strict';

// forEach method is fundamentally different from forOf.

// positive values -> deposits, negative values -> withdraws
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

for (const movement of movements) {
  // console.log(movement);
  console.log(
    `${movement <= 0 ? 'Withdraw' : 'Deposit'} of ${Math.abs(movement)}`,
  );
}

console.log('--------------------------------------------------------');

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach
movements.forEach((movement, index) =>
  console.log(
    `Movement ${index + 1}: ${
      movement <= 0 ? 'Withdraw' : 'Deposit'
    } of ${Math.abs(movement)}`,
  ),
);

// Which is more cleaner and easier to write and read?
// ForEach over forOf.

// When we use forEach & forOf.

// - One fundamental difference between the two of them
// is that u CANNOT break our of a forEach loop.
// CONTINUE AND BREAK statements do NOT work in a forEach loop.
