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

// const myName = 'Antoan';

// if (myName === 'Antoan') {
//   ***************TEMPORAL DEAD ZONE for job variable.***********************
//   console.log(`${myName} is a ${job}`); // Err:Can't access 'job' before init
//   // Error is not thrown in debug mode. IF U WAIT A BIT BEFORE CONTINUING...
//   // -> Antoan is a undefined, breakpoint: 29
//   const age = 2022 - 2000;
//   console.log(age);
//   ***************TEMPORAL DEAD ZONE for job variable.***********************
//   const job = 'learner'; // here 'job' is defined here. Block Scoped.
//   console.log(x); // Err: 'x' is not defined.
// }

// Variables
/*
console.log(me);
console.log(job);
console.log(birthYear);

var me = 'Antoan';
let job = 'learner';
const birthYear = 2000;
*/

// Functions

/*
console.log(addDecl(1, 1));
console.log(addExpr(1, 1));
console.log(addArrow(1, 1));
*/

/**
 *
 * @param {number} a
 * @param {number} b
 * @return {number}
 * */
/*
function addDecl(a, b) {
  return a + b;
}

const addExpr = function (a, b) {
  return a + b;
};

const addArrow = (a, b) => a + b; // return a + b, IMPLICITLY.
*/

/*
// var -> bug example

// numProducts -> undefined. 95. Hoisting and TDZ in Practice
console.log(numProducts);
if (!numProducts) deleteShoppingCart(); // output 'All products deleted!'

var numProducts = 10;

/**
 *
 */
/*
function deleteShoppingCart() {
  console.log('All products deleted!');
}
*/

// BEST PRACTICES, CONCLUSION OF ALL THIS ?
// - DO NOT USE VAR.
// - DECLARE VARIABLES AT THE TOP OF EACH SCOPE.
// - ALWAYS DECLARE ALL YOUR FUNCTIONS FIRST AND USE THEM ONLY AFTER DECLARATION

// Let's check another small difference between const, let, var.

/*
var x = 1;
// var creates a property(x) in the window object (the global object)
// That can have some implications in some cases.

// We can't find 'y' or 'z' in the window though, why?
// because they are declare with const/let.
// So, variables declared that way do not create properties on the global object
let y = 2;
const z = 3;
console.log('test');
*/
