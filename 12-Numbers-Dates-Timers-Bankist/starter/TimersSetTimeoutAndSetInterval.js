'use strict';

// timers in JS.
// 2 kind of timers
// 1. setTimeout timer, which runs just once, after defined time.
// 2. setInterval timer, which runs non-stop per defined time.

// We can use setTimeout, to execute some code at some point in the future.

// callback, time in milliseconds (1000 milliseconds = 1 second)
setTimeout(() => console.log('Here is the Pizza Delivery'), 1000);
console.log('Waiting');
// scheduling a function call, 1 second later.
// When JS hits the setTimeout, it will keep counting the time in the background
// and register the callback function, to be called after time has elapsed.
// and then JS'll immediately move on to the next line.
// This mechanism is called Asynchronous Javascript.

// What if we need to pass some arguments to the callback function?
// https://developer.mozilla.org/en-US/docs/Web/API/setTimeout
// setTimeout(functionRef, delay, param1, param2, /* … ,*/ paramN)
const food = 'Steak';
setTimeout((food) => console.log(`Here is the ${food} Delivery`), 2000, food);

// the 'this' problem.
// https://developer.mozilla.org/en-US/docs/Web/API/setTimeout#the_this_problem
// wrapper function, bind

// We can cancel a timeout
const timeoutID = setTimeout(
  (food) => console.log(`Here is the ${food} Delivery`),
  3000,
  'Pizza',
);

clearTimeout(timeoutID);
