'use strict';

// console.log(y); // Error. Cannot access 'y' before initialization.
// const y = 3; // Initialization.

// console.log(x); // -> hoisted with undefined.
// var x = 1;

// func1();
// func2();
// /**
//  *
//  */
// var func1 = function () {
//   console.log(1);
// };

// const func2 = function () {
//   console.log(1);
// };

// console.log(`I am a ${job}`); // Err:Cannot access 'job' before init.
// const job = 'learner'; // here 'job' is defined. Block Scoped.

const myName = 'Antoan';

if (myName === 'Antoan') {
  // ***************TEMPORAL DEAD ZONE for job variable.***********************
  console.log(`${myName} is a ${job}`); // Err:Cannot access 'job' before init.
  // Error is not thrown in debug mode. IF U WAIT A BIT BEFORE CONTINUING...
  // -> Antoan is a undefined, breakpoint: 29
  const age = 2022 - 2000;
  console.log(age);
  // ***************TEMPORAL DEAD ZONE for job variable.***********************
  const job = 'learner'; // here 'job' is defined here. Block Scoped.
  console.log(x); // Err: 'x' is not defined.
}
