'use strict';

// One level of nesting.
const arr = [[1, 2, 3], [4, 5, 6], [7, 8, 9], [10, 11, 12], 13, 14];

// we 'flattened' the array.
console.log(arr.flat());

// Two level of nesting.
const arrDeep = [[[1, 2], 3], [[4, 5], 6], [7, 8, 9], [10, 11, 12], 13, 14];
console.log(arrDeep.flat());
console.log(arrDeep.flat(2)); // 2 is the depth level of nesting.

// flatMap is essentially a map method, but at the end it flattens the result.
const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: 'Steven Thomas Williams',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: 'Sarah Smith',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

// bank total balance:
const bankBalance = accounts
  .map((account) => account.movements)
  .flat()
  .reduce((currentBalance, movement) => currentBalance + movement);

console.log(bankBalance);

const bankBalance1 = accounts
  .flatMap((account) => account.movements)
  .reduce((currentBalance, movement) => currentBalance + movement);

console.log(bankBalance1);

// flatMap is created because the combo of map and flat is very common, maybe.
// If u need more than 1 leven depth,
// u still need to use flat method with depth arg
