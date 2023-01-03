'use strict';

// Until now, we used the map, filter and reduce methods kind of in isolation.

// We can make step further, we can chain all these methods one after the other

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

// How much was deposited in the account in US dollars
const totalDepositUSD = movements
  .filter((movement) => movement > 0)
  .map((movement) => movement * 1.1)
  .reduce((currentTotalSum, movement) => currentTotalSum + movement, 0);

console.log(totalDepositUSD);
