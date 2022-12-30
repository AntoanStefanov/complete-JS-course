'use strict';

let f;

const g = function () {
  const a = 23;
  f = function () {
    console.log(a * 2);
  };
};

const h = function () {
  const b = 777;
  f = function () {
    console.log(b * 2);
  };
};

g();
f();

// Re-assigning f function.
h();
f();
console.dir(f);

// Example 2
const boardPassengers = function (passengerNum, waitSeconds) {
  const perGroup = passengerNum / 3;

  // We pass to setTimeout, a CALLBACK FUNCTION!
  setTimeout(function () {
    console.log(`We are now boarding all ${passengerNum} passengers`);
    console.log(`There are three groups, each with ${perGroup} passengers`);
  }, waitSeconds * 1000);

  console.log(`will start boarding in ${waitSeconds} seconds`);
};

boardPassengers(180, 3);
