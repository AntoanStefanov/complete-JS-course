'use strict';

// timers in JS.
// 2 kind of timers
// 1. setTimeout timer, which runs just once, after defined time.
// 2. setInterval timer, which runs non-stop per defined time.

// We can use setTimeout, to execute some code at some point in the future.

// callback, time in milliseconds (1000 milliseconds = 1 second)
setTimeout(() => console.log('Here is the Pizza Delivery'), 3000);
console.log('Waiting');
// scheduling a function call, 3 second later.
// When JS hits the setTimeout, it will keep counting the time in the background
// and register the callback function, to be called after time has elapsed.
// and then JS'll immediately move on to the next line.
// This mechanism is called Asynchronous Javascript.
