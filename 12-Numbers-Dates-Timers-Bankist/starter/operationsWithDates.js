'use strict';

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
