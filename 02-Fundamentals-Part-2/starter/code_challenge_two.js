'use strict';

// ! Use TERNARY Operator, if chance given......., instead of if/else statement... Cleaner!
const calcTip = (bill) =>
  bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;

console.log(calcTip(100));

const bills = [125, 555, 44];

console.log(bills);

// Remember that an array needs a value in each position, and that value can
// actually be the returned value of a function! So you can just call a function as array
// values (so don't store the tip values in separate variables first, but right in the new
// array).

// A lot cleaner, than making first variables,
// and then adding them as elements to the array.
const tips = [
  calcTip(bills[0]),
  calcTip(bills[1]),
  calcTip(bills[bills.length - 1]), // or bills[2]
];

console.log(tips);

const total = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]];

console.log(total);

// In JavaScript, however, functions are not only syntax but also values,
// which means they can be assigned to variables,
// stored in the properties of objects or the elements of arrays,
// passed as arguments to functions, and so on.
// https://www.oreilly.com/library/view/javascript-the-definitive/9781449393854/ch08s04.html

// ! Use TERNARY Operator, if chance given......., instead of if/else statement... Cleaner! Check google if doubt ?