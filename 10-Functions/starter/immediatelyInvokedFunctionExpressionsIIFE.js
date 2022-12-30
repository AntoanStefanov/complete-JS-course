'use strict';

// sometimes in JS, we need a function that is only executed once.
// and then, NEVER again.

// Basically, a function that disappears right after it's called once.

// We acually need this technique later, for example with async/await.

// // We could do something like this.
// const runOnce = function () {
//   console.log('This will never run again');
// };

// runOnce();

// // However, we can actually RUN this function AGAIN,
// // at some other point in the code
// // if we wanted to.
// runOnce(); // see ?
// // This is not what we want to do.

// We want to execute a function immediately and not having to save it somewhere

// This is how we do that. with wrapping it with ()so,JS thinks is an expression
(function () {
  console.log('This will never run again');
  // const isPrivate = 23;
})();
// (...) is just a function value/expression, which we call () afterwards.
// Immediately Invoked Function Expression (IIFE)

// Same would work for arrow function.
(() => console.log('This will ALSO never run again.'))();

// Why was this pattern invented?
// Well, we already know that functions create scopes.
// What's important here, is that one scope does not have access to variables
// from an inner scope.
// Therefore, we say that all data defined inside a scope is private.
// we also say that this data is encapsulated.
// for example, isPrivate variable is encapsulated in the function scope.
// Data encapsulation & data privacy are extremely important concepts in coding.

// Many times we actually need to protect our variables, from being accidentally
// overwritten by some other parts of the program or even with external scripts/
// libraries.
// We will talk about these in OOP section.
// Keep in mind that, it's important to HIDE variables and that SCOPES are
// a good tool for doing this.

// This is also the reason why IIFE were invented.
