'use strict';

const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
const tips = [];
const totals = [];

// 50 <= bill && bill <= 300
const calcTip = (bill) =>
  bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;

for (let index = 0; index < bills.length - 1; index++) {
  tips.push(calcTip(bills[index]));
  totals.push(tips[index] + bills[index]);
}
console.log(bills);
console.log(tips);
console.log(totals);

const calcAverage = function (arr) {
  let currentTotal = 0;
  for (let i = 0; i < arr.length; i++) {
    currentTotal += arr[i];
  }
  return currentTotal / arr.length;
};

console.log(calcAverage(bills));
