'use strict';

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number

// Learn:
// How numbers work in JS?
// How to convert values to numbers?
// How to check if certain values are numbers or not?

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
console.log(accounts);

// 1.
// First thing, I should know about numbers in JS,
// All numbers are REPRESENTED internally as floating point numbers.
// So basically, always as DECIMALS.
// NO MATTER if we actually write them as integers or as decimals.

// proof
console.log(23 === 23.0); // true
// That's the reason, we only have ONE data type for all numbers. (number)
console.log(typeof 23);
console.log(typeof 23.23);

// 2.
// Numbers are represented internally in a 64 base 2 format.
// That means that numbers are always stored in a binary format/machine code 0-1

// In this binary form, it is very hard to represent some fractions that are
// very easy to represent in the base 10 system that we are used to. 20829 /0-9/

// There are certain numbers that are difficult to represent in 0 & 1/binary/.
// One example of that is the fraction 0.1

// And that then results in very wierd results like this.
console.log(0.1 + 0.2); // 0.30000000000000004

// JS simply has no better way of representing this number.
// Base 10 - 0-9. 1/10 = 0.1 | 10/3 = 3.33333(infinity) =>
console.log(10 / 3);
// in BINARY (base 2 - 0-1) the same thing happens with 0.1
// We get an infinite fraction and that then results in a wierd result like this

// In some cases, JS does some rounding behind the scenes to try its best to
// hide these problems, but some operations like the one above(0.1+0.2) simply
// cannot mask the fact that behind the scenes, they cannot represent certain
// fraction.

// CONVERSIONS

// Converting string to number
console.log(Number('23'));
// easier way:
console.log(+'23'); // when JS sees the + operator, it will do TYPE COERCION.
// It will automatically convert all the operands to numbers.

// PARSING
// parse a number from a string.
// sec arg is radix-base of the num sys
console.log(Number.parseInt('123px', 10));
// JS'll figure out the number in the str
// The string needs to start with a number.

console.log(Number.parseFloat('2.5rem'));

// isNaN
// check if value is NOT A NUMBER
console.log(Number.isNaN(20));
console.log(Number.isNaN('20'));
console.log(+'20px');
console.log(Number.isNaN(+'20px'));
console.log(23 / 0);
console.log(Number.isNaN(23 / 0));

// better way is finite. BEST WAY OF CHECKING IF A VALUE IS A NUMBER.
// CHECK IF VALUE IS A NUMBER (INTEGER/DECIMAL)
console.log(Number.isFinite(23));
console.log(Number.isFinite('23'));
console.log(Number.isFinite(23 / 0));
console.log(Number.isFinite(2.2));

// If u are sure that the value is an integer, u can use isInteger()
console.log(Number.isInteger(2));
console.log(Number.isInteger(2.3));
console.log(Number.isInteger('2'));
console.log(Number.isInteger(2.0)); // true, bcs /23 === 23.0 -> true /
