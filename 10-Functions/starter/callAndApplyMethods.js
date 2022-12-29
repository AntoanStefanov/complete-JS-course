'use strict';

// Learn setting 'this' keyword manually.
// Why we would do that?

const lufthansa = {
  airline: 'Lufthansa',
  iataCode: 'LH',
  bookings: [],

  // book: function () {} -> same as below.
  // writing method using the enhanced object literal syntax.
  book(flightNum, name) {
    console.log(`${name} booked a seat on ${this.airline}.\
Flight: ${this.iataCode}${flightNum}`);
    this.bookings.push({flight: `${this.iataCode}${flightNum}`, name});
  },
};

lufthansa.book(239, 'Antoan Stefanov');
lufthansa.book(365, 'Jonas Smith');
console.log(lufthansa.bookings);

// Let's say the Lufthansa group created a new airline.

const eurowings = {
  airline: 'Eurowings',
  iataCode: 'EW',
  bookings: [],
  // We are not copying the same method here, bcs it's a bad practice. DRY
};

// const book = (flightNum, fullName) => {
//   console.log(`${fullName} booked a seat on ${this.airline}.\
// Flight: ${this.iataCode}${flightNum}`);
//   this.bookings.push({flight: `${this.iataCode}${flightNum}`, fullName});
// };

const book = lufthansa.book;

// book(23, 'Sarah Maria');
// 'this' here is undefined. That's just a regular func call
// How we fix this undefined behavior.
// How we tell JS, we want to create a booking on the new 'eurowings' airline or
// on the lufthansa airline?

// We will tell JS explicitly what the 'this' keyword should be.
// Three function methods to do that:
// call, apply, bind.

book.call(eurowings, 23, 'Sarah Maria');
console.log(eurowings);
