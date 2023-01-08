'use strict';

const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 455.23, -306.5, 25000, -642.21, -133.9, 79.97, 1300],
  interestRate: 1.2, // %
  pin: 1111,

  movementsDates: [
    '2019-11-18T21:31:17.178Z',
    '2019-12-23T07:42:02.383Z',
    '2020-01-28T09:15:04.904Z',
    '2020-04-01T10:17:24.185Z',
    '2020-05-08T14:11:59.604Z',
    '2020-05-27T17:01:17.194Z',
    '2020-07-11T23:36:17.929Z',
    '2020-07-12T10:51:36.790Z',
  ],
  currency: 'EUR',
  locale: 'pt-PT', // de-DE
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,

  movementsDates: [
    '2019-11-01T13:15:33.035Z',
    '2019-11-30T09:48:16.867Z',
    '2019-12-25T06:04:23.907Z',
    '2020-01-25T14:18:46.235Z',
    '2020-02-05T16:33:06.386Z',
    '2020-04-10T14:43:26.374Z',
    '2020-06-25T18:49:59.371Z',
    '2020-07-26T12:01:20.894Z',
  ],
  currency: 'USD',
  locale: 'en-US',
};

const accounts = [account1, account2];

// Calculations with dates.
// subtract one date from the other. -,
// in order to calculate how many days have passed between the two dates.

// this works, bcs whenever we attempt to convert a date to a number
console.log(Number(new Date())); // the result is the timestamp in milliseconds.
// And with these milliseconds, we can then perform calculations.

const futureDate = new Date(2023, 3, 14);
console.log(Number(futureDate)); // the result is the timestamp in milliseconds
// dateTimestamp - dateTimestamp = milliseconds -> convert milliseconds to Date.

const daysPassed = (firstDate, secondDate) =>
  Math.abs((secondDate - firstDate) / (1000 * 60 * 60 * 24));

const days = daysPassed(new Date(2037, 3, 14), new Date(2037, 3, 4));
console.log(days);
// const differenceDate = new Date(days);
// console.log(differenceDate, differenceDate.toString());
