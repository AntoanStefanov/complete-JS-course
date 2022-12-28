'use strict';

// How passing arguments into functions WORKS?
// Primitives vs Objects. aka Primitive Types & Reference Types.

// How primitive types and references types work in the context of functions?

const flight = 'LH234';

const antoan = {
  fullName: 'Antoan Stefanov',
  firstName: 'Antoan',
  lastName: 'Stefanov',
  age: 22,
  passportID: 2143254324321,
};

const checkIn = function (flightNum, passenger) {
  flightNum = 'LH999';
  console.log('Flight Num changed to: ' + flightNum);

  // Here we manipulate the same object,
  // which 'antoan' and 'passenger' variables hold as a reference in the m.heap.
  passenger.fullName = 'Mr. ' + passenger.fullName;

  if (passenger.passportID === 2143254324321) console.log('Check in');
  else console.log('Wrong Passport');
};

checkIn(flight, antoan);
// flight is just a primitive type(string), as we passed that value into checkIn
// the flightNum in the func's basically a copy of that original value 'flight'.
// So, flightNum contains a copy of the original value,
// not the original value ITSELF.
console.log(flight);

// When we pass a reference type, what is copied is the reference
// to the object in the memory heap.
console.log(antoan);

// Passing the args to the func is Same as doing this.
const flightNum = flight;
const passenger = antoan;
// Here passenger and antoan are pointing to the same object in the memory heap.
// because here, passenger contains a copy of JUST the reference to the object.
// The same thing happens when we pass antoan to the checkIn function.

console.log(flightNum, passenger);

const newPassport = function (person) {
  person.passportID = Math.trunc(Math.random() * 1000000);
};

newPassport(antoan);
console.log(antoan);
checkIn(flight, antoan);

// There are two terms, used all the time when dealing with functions.
// 'Passing by value'
// 'Passing by reference'

// JS does NOT have 'passing by reference', ONLY 'passing by value',
// even though it LOOKS like 'passing by reference'

// That reference, which we pass an object to a function, is STILL A VALUE!
// It's simply a VALUE that HOLDS a memory address.

// Basically, we pass a reference to the function,
//  but we do NOT pass by reference
