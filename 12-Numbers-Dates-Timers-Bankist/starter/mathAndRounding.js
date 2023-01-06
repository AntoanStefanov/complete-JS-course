'use strict';
// https://stackoverflow.com/questions/14/difference-between-math-floor-and-math-truncate

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math
// CHECK MDN MAX AND MIN
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/min#clipping_a_value_with_math.min
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/max#getting_the_maximum_element_of_an_array

// square root
https: console.log(Math.sqrt(25));
// same done with exponential operator
console.log(25 ** (1 / 2));
console.log(8 ** (1 / 3)); // cubic root

// Max value of a couple of values.
// Math.max DOES type coercion Math.max(1,2,'23')
// But it does not do parsint Math.max('23px') => NaN
console.log(Math.max(1, 2, 3));

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/max#getting_the_maximum_element_of_an_array

const arr = [1, 2, 3];
const max = arr.reduce((a, b) => Math.max(a, b), -Infinity);
console.log(max);

// Same goes for Math.min
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/min

console.log(Math.min(1, 2, 3));

// Constants
console.log(Math.PI * Number.parseFloat('10px') ** 2);

const getRandomInt = function (max) {
  return Math.ceil(Math.random() * max);
};

console.log(getRandomInt(4)); // 1, 2, 3, 4
// if Math.floor in fn, it can return 0, 1, 2, 3
// https://stackoverflow.com/questions/14/difference-between-math-floor-and-math-truncate

// min and max included
// https://stackoverflow.com/questions/4959975/generate-random-number-between-two-numbers-in-javascript
const randomIntFromInterval = function (min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

const rndInt = randomIntFromInterval(1, 6);
console.log(rndInt);

// https://stackoverflow.com/questions/14/difference-between-math-floor-and-math-truncate
// Rounding ints.
console.log(Math.round(23.9));
console.log(Math.round(23.4));
console.log(Math.round(23.5));

console.log(Math.ceil(23.4));
console.log(Math.ceil(23.5));

// Representing Floating point numbers(decimals)

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/toFixed
// Number.prototype.toFixed() -> in link, left side.
// Number.prototype.method -> means the method is used on objects
// created by the object(Number constructor) !
// If Number.isFinite() -> method is on the Number object ITSELF
// , not objects created by the Number OBJECT.
console.log((2.7).toFixed(0)); // '3' => string
console.log((2.7).toFixed()); // '3' => string
console.log((2.7).toFixed(2)); // '2.70' => string
console.log((2.7).toFixed(3)); // '2.700' => string
console.log((2.345).toFixed(2)); // '2.35' => string | if 3rd num >= 5, round up
// If we want it as a num
console.log(+(2.74).toFixed(2)); // 2.74 => num

// https://www.udemy.com/course/the-complete-javascript-course/learn/lecture/22648879#questions
