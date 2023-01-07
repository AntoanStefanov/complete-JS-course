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
console.log('b', date2);

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

const dateUTC = new Date('1995-12-17T03:24:00Z'); // no time zone
const dateTimeZone = new Date('1995-12-17T03:24:00'); // with time zone

console.log('a' + dateUTC);
console.log(dateUTC.toISOString());
// this calls Date.prototype.toString(), which date is interpreted in local time
console.log('a' + dateTimeZone);
console.log(dateTimeZone.toISOString());

// There dates we created are just another type of object.
// Therefore they have their own methods, just like arrays, maps or strings...

// We can use these methods to get or to set components of a date.

// THIS WAY INCLUDES THE TIME ZONE. if u get toISOString will return -2h.
const futureDate = new Date(2037, 10, 19, 15, 23); // month is 0 BASED!
console.log('futureDate', futureDate);
console.log('a' + futureDate);
console.log(futureDate.getFullYear()); // 2037
console.log(futureDate.getMonth()); // 10 (actually is 11 month /november/)
console.log(futureDate.getDate()); // 19 that's the day.
console.log(futureDate.getDay()); // 4 day of the week, using local time,0-based
console.log(futureDate.getHours()); // 15
console.log(futureDate.getMinutes()); // 23
console.log(futureDate.getSeconds()); // 0

console.log(futureDate.toDateString()); // Thu Nov 19 2037
console.log(futureDate.toISOString()); // 2037-11-19T13:23:00.000Z

// !Very useful method (toISOString), when u want to convert a date obj into str

// get the timestamp for the date.
// timestamp -> millisecs passed since 1st Jan 1970
console.log(futureDate.getTime()); // 2142249780000 milliseconds since01.01.1970
console.log(new Date(2142249780000)); // date since since 01.01.1970 from milsec

// Timestamps are IMPORTANT. That there is a special method that we can use to
// get the timestamp for right now.

// get current timestamp for this exact moment.
console.log(Date.now());

// there are also SET versions of all the GET methods. setDate(), setHours()...
futureDate.setFullYear(now.getFullYear());
console.log(futureDate);

// AUTOCORRECTION, there is no 32 of january | zero-based month
console.log(new Date(2023, 0, 32, 22, 4)); // 2023-02-01T20:04:00.000Z
