'use strict';

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

// 1.
const bankDepositSum = accounts
  // first the map method will be executed, then the result will be flattened.
  .flatMap((account) => account.movements)
  .filter((movement) => movement > 0)
  .reduce(
    (currentDepositSum, currentDeposit) => currentDepositSum + currentDeposit,
  );

console.log(bankDepositSum);

// 2. How many deposits there have been in the bank with at least 1 000.
const OneThousandDollarsDepositCount = accounts
  .flatMap((account) => account.movements)
  .filter((movement) => movement >= 1000).length;

const OneThousandDollarsDepositCount1 = accounts
  .flatMap((account) => account.movements)
  .reduce((counter, movement) => (movement >= 1000 ? ++counter : counter), 0);

console.log(OneThousandDollarsDepositCount);
console.log(OneThousandDollarsDepositCount1);

// 3. advanced case of the reduce method,
// Create a new object instead of just a number/string.
// Object that contains the sum of the deposits and of the withdrawals.

const summaryObject = accounts
  .flatMap((account) => account.movements)
  .reduce((obj, movement) => {
    if (!obj.deposits) {
      obj.deposits = [];
    }
    if (!obj.withdrawals) {
      obj.withdrawals = [];
    }
    movement > 0 ? obj.deposits.push(movement) : obj.withdrawals.push(movement);

    return obj;
  }, {});

console.log(summaryObject);

const summaryObject1 = accounts
  .flatMap((account) => account.movements)
  .reduce(
    // movement > 0 ? (obj.deposits += movement) : (obj.withdrawals += movement)
    (obj, movement) => {
      obj[movement > 0 ? 'deposits' : 'withdrawals'] += movement;
      return obj;
    },
    {deposits: 0, withdrawals: 0},
  );

console.log(summaryObject1);

// 4. 21:29
const titleCaseConversion = function (title) {
  const articles = ['a', 'an', 'the'];
  const prepositions = ['in', 'with', 'by', 'of', 'on'];
  const conjunctions = ['and', 'or', 'but'];
  const exceptions = [...articles, ...prepositions, ...conjunctions];
  const upperFirstLetter = (word) => word[0].toUpperCase() + word.slice(1);

  const titleCase = title
    .toLowerCase()
    .split(' ')
    .map((currentWord) =>
      exceptions.includes(currentWord)
        ? currentWord
        : upperFirstLetter(currentWord),
    )
    .join(' ');

  return upperFirstLetter(titleCase);
};

console.log(titleCaseConversion('the last of the summer wine'));
