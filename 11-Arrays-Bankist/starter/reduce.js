'use strict';

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

const totalBalance = movements.reduce(
  (totalBalance, movement) => totalBalance + movement,
  0,
);

console.log(totalBalance);
