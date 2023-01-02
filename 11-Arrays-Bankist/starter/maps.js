'use strict';

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

// Let's convert the movements into US dollars.(lets suppose they are in euros)

const euroToUSD = 1.1;

// MAP returns NEW ARRAY.
// One line of code in arrow function ->
// no { }(body block) & return keyword ARE NEEDED.
// the value is RETURNED, but no return keyword is needed.
// when we have 1 param in arrow function, (param) -> () parens are NOT needed.
// But I've read that it's okay to use them, even I prefer it that way (param)
const movementsUSD = movements.map((movement) => movement * euroToUSD);
console.log(movementsUSD);

// map is more inline with 'functional programming', which becomes popular.
