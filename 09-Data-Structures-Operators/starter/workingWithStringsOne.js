'use strict';

/*

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

const airline = 'TAP Air Portugal';

console.log(airline.toLowerCase());
console.log(airline.toUpperCase());
console.log('Antoan'.toUpperCase());

// Fix capitalization in name
const passenger = 'tOnY'; // Tony

const passengerLower = passenger.toLowerCase();
const passengerCorrect =
  passengerLower[0].toUpperCase() + passengerLower.slice(1);

console.log(passengerCorrect);

// Comparing user input email.
const email = 'hello@example.com';
// logs in.
const loginEmail = '   Hello@Example.com \n';

// const loginLowerCaseEmail = loginEmail.toLowerCase();
// console.log(loginLowerCaseEmail);
// const noSpaceloginLowerCaseEmail = loginLowerCaseEmail.replace(/\s/g, '');
// const trimmedloginLowerCaseEmail = loginLowerCaseEmail.trim();
// console.log(trimmedloginLowerCaseEmail);

const normalizedEmail = loginEmail.toLowerCase().trim();
console.log(normalizedEmail);

console.log(email === normalizedEmail);

// Replace parts of strings.
const priceGB = '288,97';
const dollarCourse = 1.2;
const priceUS = Number(priceGB.replace(',', '.')) * dollarCourse;
console.log(priceUS);

// Practice
const checkBaggage = function (items) {
  items = items.toLowerCase();
  if (items.includes('gun') || items.includes('knife')) {
    console.log('No flying');
  } else {
    console.log('Save Flight!');
  }
};

checkBaggage('I have a Laptop, some Food and a pocket Knife');
checkBaggage('Socks and camera');
checkBaggage('snacks and a gun');

*/

console.log('a very nice string'.split(' '));

const [firstName, lastName] = 'Antoan Stefanov'.split(' ');
console.log(firstName, lastName);

console.log(['Mr.', firstName, lastName.toUpperCase()].join(' '));

const passenger = 'jessica ann smith davis';
const capitalizedName = passenger
  .split(' ')
  .map((name) => name[0].toUpperCase() + name.slice(1).toLowerCase())
  .join(' ');

console.log(capitalizedName);

// Padding a string:
// Adding a number of characters to the string,
// until the string has a certain desired length.

const message = 'Go to gate 23!';
console.log(message.padStart(20, '#').padEnd(35, '#'));
console.log('Antoan'.padStart(20, '#').padEnd(35, '#'));

// Credit card number on internet, you never see the entire number.
// Last 4 digits, rest is masked with some symbol.

const maskCreditCardNumber = function (creditCardNumber) {
  const lastDigitsLength = 4;
  // Convert the credit card number to a string
  // const creditCardNumberAsString = String(creditCardNumber);
  const creditCardNumberAsString = creditCardNumber + '';

  const cardNumberLength = creditCardNumberAsString.length;
  const lastFourDigits = creditCardNumberAsString.slice(-lastDigitsLength);

  console.log(
    lastFourDigits.padStart(cardNumberLength - lastDigitsLength, '#'),
  );
};

maskCreditCardNumber(3214389234239899);
maskCreditCardNumber('3254343123214323');
