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

book.call(lufthansa, 43, 'John Carry');
console.log(lufthansa);

const swiss = {
  airline: 'Swiss Air Lines',
  iataCode: 'LX',
  bookings: [],
};

book.call(swiss, 33, 'Roy Pero');
console.log(swiss);

// There is similar method to the call method, called apply.

// apply method does the same thing.
// The only difference is that 'apply' does not recieve a list of arguments,
// after the 'this' keyword is, it does NOT recieve a list of args like 'call'.
// book.call(swiss, 33, 'Roy Pero'); -> Does NOT recieve ... 33, 'Roy Pero');
// but instead APPLY RECIEVES AN ARRAY OF ARGUMENTS.
const flightData = [22, 'Alice Pero'];
book.apply(eurowings, flightData);
console.log(eurowings);

// Apply method is NOT that used anymore, in modern JS
// because now we have a better way of doing the exact same thing.

book.call(swiss, ...flightData); // spread operator
console.log(swiss);

// use call method instead of apply. if args are in array, use spread operator.
// Spreading out the arguments.

// call method allows us to EXPLICITLY define the 'this' keyword in any function
