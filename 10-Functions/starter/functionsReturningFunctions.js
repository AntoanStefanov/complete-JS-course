'use strict';

const greet = function (greeting) {
  return function (name) {
    console.log(`${greeting}, ${name}!`);
  };
};

// Up code using arrow functions
// const greet = (greeting) => (name) => console.log(`${greeting}, ${name}!`);

const greeterHey = greet('Hey');
greeterHey('Antoan');
greeterHey('Pesho');

greet('Hello')('Antoan');
