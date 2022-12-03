'use strict';

const calcTip = (bill) =>
  bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;

console.log(calcTip(100));

const bills = [125, 555, 44];

console.log(bills);

// Remember that an array needs a value in each position, and that value can
// actually be the returned value of a function! So you can just call a function as array
// values (so don't store the tip values in separate variables first, but right in the new
// array).

const tips = [
  calcTip(bills[0]),
  calcTip(bills[1]),
  calcTip(bills[bills.length - 1]), // or bills[2]
];

console.log(tips);

const total = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]];

console.log(total);
