'use strict';

const airline = 'TAP Air Portugal';
const plane = 'A320';

console.log(plane[0]);
console.log(plane[1]);
console.log('B737'[0]);
console.log(airline.length);
console.log('B636'.length);

// Methods
// Quite similar to array methods.

console.log(airline.indexOf('r')); // returns 6, first occurence
console.log(airline.lastIndexOf('r')); // returns 10, last occurence
console.log(airline.indexOf('Portugal')); // returns 8
console.log(airline.indexOf('portugal')); // returns -1, case-sensitive

// Why we need those indexes:
// Good use case is to extract part of a string using the slice method

console.log(airline.slice(4)); // 'Air Portugal' substr /start from 4(inclusive)

// slice does not affect the original string, strings are IMMUTABLE.(primitives)

// The strings methods always return a new string, to be saved in variable/ORw.e

console.log(airline.slice(4, 7)); // 'Air'| from 4(inclusive) to 7(exclusive)
// the length of the extracted string is always gonna be the end(7)-beginning(4)

// Until now, we hard-coded these values .slice(4, 7).
// But of course, many times, we don't even know the string, that we recieve.

// Let's try to extract just the first word of the string, without knowing,
// indexes.

// First word
console.log(airline.split(' ')[0]); // split()->an array | [0] ->TAP
console.log(airline.slice(0, airline.indexOf(' '))); // -> TAP

// Last word.
console.log(airline.split(' ')); // split()->an array | [0] ->TAP
console.log(airline.slice(airline.lastIndexOf(' ') + 1)); // -> Portugal

console.log(airline.slice(-2)); // -> 'Portugal' -> al
console.log(airline.slice(0, -8)); // -> TAP Air
console.log(airline.slice(-3, -1)); // -> 'Portugal' -> ga

// fn, recieves an airplane seat, logs whether it is a middle seat or not.
const checkMiddleSeat = function (seat) {
  const seatPlace = seat.slice(-1);
  if (seatPlace === 'B' || seatPlace === 'E') console.log('Middle seat');
  else console.log('Side seat for ya.');
};

checkMiddleSeat('11B');
checkMiddleSeat('23C');
checkMiddleSeat('3E');

// String is primitive, but JS converts it to String Object, with same content,
// Then it's that object, which has the methods(Str obj inherits from Object 2)
// This process is called 'boxing', takes the string and puts it into a box,
// which is the object.

// console.log(new String('Antoan')); // check the String object.
// or str.__proto__ is the same.
console.log(typeof 'asd'); // string
console.log(typeof 'asd'.__proto__); // object.
