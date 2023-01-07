'use strict';

// When we built real world apps, one type of data that comes up all the time is
// DATES AND TIMES.

// Fundamentals of dates and times.

// Create a date.
// 4 ways of creating a date, they all use the new Date() construction function
// But they can accept different params.

// !
// The T is just a literal to separate the date from the time,
// and the Z means “zero hour offset” also known as “Zulu time” (UTC)

// 1. way
const now = new Date();
console.log(now);

// 2. Parse the date from a date string.
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date#several_ways_to_create_a_date_object

// DISCOURAGED: may not work in all runtimes
const date = new Date('Jan 07 2023 19:48:25');
console.log(date);

// DISCOURAGED: may not work in all runtimes
const date1 = new Date('December 24, 2015');
console.log(date1);

const date2 = new Date('1995-12-17T03:24:00Z'); // this is reliable. check Docs
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date#several_ways_to_create_a_date_object
console.log(date2);

const date3 = new Date(1995, 11, 17); // the month is 0-indexed
const date4 = new Date(1995, 11, 17, 3, 24, 0);

console.log(date3);
console.log('a' + date4);

// JS can autocorrect the day. 31 november does NOT exist.
const date5 = new Date(1995, 10, 31); // 1995-11-30T22:00:00.000Z
console.log(date5);

// Docs.
// We can pass the milliseconds passed, since the beginning of the Unix time
// Jan 1, 1970

console.log(new Date(0)); // 1970-01-01T00:00:00.000Z
// three day after the beginning of the Unix time
// passing epoch timestamp
console.log(new Date(3 * 24 * 60 * 60 * 1000)); // 1970-01-04T00:00:00.000Z
// passing epoch timestamp
const date6 = new Date(628021800000); // 1989-11-25T18:30:00.000Z
console.log(date6);

// 3 days in milliseconds
// 3 * 24 * 60 * 60 * 1000, this is how we convert from days to milliseconds
