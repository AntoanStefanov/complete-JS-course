'use strict';

// Until now, we used the map, filter and reduce methods kind of in isolation.

// We can make step further, we can chain all these methods one after the other

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

// https://en.wikipedia.org/wiki/Pipeline_(software)
const totalDepositUSD = movements
  .filter((movement) => movement > 0)
  .map((movement) => movement * 1.1)
  .reduce((currentTotalSum, movement) => currentTotalSum + movement, 0);
// Imagine this as a sort of pipeline that processes our data.
// We put data in the beginning of the pipeline,
// then it goes through all these steps
// and in the end of the pipeline, the input data comes out proccessed.
console.log(totalDepositUSD);
// If these is a bug, u can use the 'array' param in each of these fn,
// so you can log them out, to see what comes in the next method.
// Example: .filter((movement, index, array) => {console.log(array)})
