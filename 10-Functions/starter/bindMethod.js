'use strict';

// Bind method.
// Just like the call method,
// bind method also allows us to manually set 'this' keyword for any fn call.

// Difference is that bind does NOT immediately call the function.
// INSTEAD, it returns a new function, where the 'this' keyword is BOUND.
// It's set to whatever value we pass into bind method.

'use strict';

// Learn setting 'this' keyword manually.
// Why we would do that?

const lufthansa = {
  airline: 'Lufthansa',
  iataCode: 'LH',
  bookings: [],

  book(flightNum, name) {
    console.log(`${name} booked a seat on ${this.airline}.\
Flight: ${this.iataCode}${flightNum}`);
    this.bookings.push({flight: `${this.iataCode}${flightNum}`, name});
  },
};

const eurowings = {
  airline: 'Eurowings',
  iataCode: 'EW',
  bookings: [],
  // We are not copying the same method here, bcs it's a bad practice. DRY
};

const swiss = {
  airline: 'Swiss Air Lines',
  iataCode: 'LX',
  bookings: [],
};

lufthansa.book(239, 'Antoan Stefanov');
lufthansa.book(365, 'Jonas Smith');

const book = lufthansa.book;

book.call(eurowings, 23, 'Sarah Maria');
book.call(lufthansa, 43, 'John Carry');

book.call(swiss, 33, 'Roy Pero');

const flightData = [22, 'Alice Pero'];

book.apply(eurowings, flightData);
book.call(swiss, ...flightData);

// Code from last lecture.
// Now, let's say we need to use the book function for Eurowings all the time.

// book.call(eurowings, 23, 'Sarah Maria'); // call fn, if we need to
//  use the book function ONE time/couple of times.

// console.log(book.bind(eurowings));
// this does NOT call the book function,
// it creates & returns a bound function,
// where the 'this' keyword will always be set to eurowings obj.(in this case)

// Creating one booking fn for each of the airlines
const bookLH = book.bind(lufthansa); // this fn has the 'this' keyw set in stone
const bookEW = book.bind(eurowings); // this fn has the 'this' keyw set in stone
const bookLX = book.bind(swiss); // this fn has the 'this' keyw set in stone

bookLH(131, 'Moro Takov');
bookEW(121, 'Toro Makov');
bookLX(114, 'Toro Takov');

// We can pass args to the bind function, like the call method
// so that they can be bound same as 'this' keyword, to the returned function.
// For example, we can use bind to create a function for one specific airline &
// for one specific flight number.

const bookEW23 = book.bind(eurowings, 23); // we can define the list of args.,23
// Specifying some of the arguments beforehand, is actually a common pattern,
// called 'PARTIAL APPLICATION'
// https://www.google.com/search?q=PARTIAL+APPLICATION+meaning&oq=PARTIAL+APPLICATION+meaning&aqs=chrome..69i57j0i15i22i30j0i15i22i30i625j0i22i30l5j0i15i22i30l2.1423j0j7&sourceid=chrome&ie=UTF-8

bookEW23('Pesho Takov');
// bookEW23 only needs the name, bcs we passed/bounded flightNum already above.
// Check in debug mode, bookEW23 fn/expand it/, [[boundThis]], [[boundArgs]]

console.log(lufthansa);
console.log(eurowings);
console.log(swiss);
