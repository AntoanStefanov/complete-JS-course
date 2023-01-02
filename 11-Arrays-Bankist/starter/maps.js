'use strict';

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

// Let's convert the movements into US dollars.(lets suppose they are in euros)

const euroToUSD = 1.1;

const movementsUSD = movements.map((movement) => movement * euroToUSD);
console.log(movementsUSD);
