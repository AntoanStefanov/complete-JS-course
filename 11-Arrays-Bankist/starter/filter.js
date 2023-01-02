'use strict';

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

// Only elements which the condition is true, will be in the newly created arr.
const deposits = movements.filter((movement) => movement > 0);
console.log(deposits);
// There is a push for using more 'FUNCTIONAL CODE' like this: map, filter, red
