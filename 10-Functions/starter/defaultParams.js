'use strict';

const bookings = [];

// 1.The default values can be any expression => price = 100 * 1.25
// 2.We can use the values of other params that were set before.
const createBooking = function (
  flightNum,
  numPassenger = 2,
  price = 100 * numPassenger, // expression, using 'before-set' param.
) {
  // Old way of setting default parameters. Before ES6. aka ES5.
  // numPassenger ||= 1;
  // price ||= 100;

  const booking = {
    // enhanced object literal syntax.
    flightNum,
    numPassenger,
    price,
  };

  console.log(booking);
  bookings.push(booking);
};

createBooking('LH123');
createBooking('LH123', 2, 800);
createBooking('LH123', 3);
createBooking('LH123', 5);
// We cannot skip args, when we call a function.
// Let's say we want to leave the numPassenger arg, and pass the price arg.
createBooking('LH123', 50); // 50 will be set as numPassenger
// We can use the 'undefined' trick.
createBooking('LH123', undefined, 50); // 50, now, will be set as numPassenger
