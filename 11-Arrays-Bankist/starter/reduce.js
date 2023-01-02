'use strict';

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

const totalBalance = movements.reduce(
  (currentTotalBalance, movement) => currentTotalBalance + movement,
  0,
);
console.log(totalBalance);

// Get Maximum value.
// if (movement > maxMovement) return movement;
// return maxMovement;
const maxMovement = movements.reduce((currentMaxMovement, movement) =>
  movement > currentMaxMovement ? movement : currentMaxMovement,
);
console.log(maxMovement);
