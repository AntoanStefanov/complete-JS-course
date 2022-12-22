'use strict';

// 1. Method(function attached to an object) ->
// 'this' = <Object that is calling the method>

const antoan = {
  name: 'Antoan',
  year: 2000,
  calcAge: function () {
    return 2022 - this.year;
  },

  // Arrow functions -> 'this' = <this of parent function(lexical this)>.
  // Do NOT get own 'this'.
  showYear: () => console.log(this.year), // in debug 'this' is defined,
  // but, in debug console 'this' here is 'window' object.
  // https://eslint.org/docs/latest/rules/no-invalid-this ! REASONS FOR THAT !
};

antoan.calcAge();
antoan.showYear();

// ******************************************

// // Event handler with Arrow function -> this === window object.
// const hOneEl = document.getElementsByTagName('h1')[0];
// hOneEl.addEventListener('click', (ev) => {
//   console.log(ev.target.innerHTML);
//   // For this inside functions, this rule basically checks
//   // whether or not the function containing this keyword is
//   // a constructor or a method.
//   // Note that arrow functions have lexical this,
//   // and that therefore this rule checks their enclosing contexts.
//   // No error here. /lexical this here is the window.obj/
//   console.log(this.innerHTML);
// });

// // Event handler with function expressions -> this === the HTMLElement.
// hOneEl.addEventListener('click', function (ev) {
//   // Maybe better to use ev.target, instead of 'this' in EVENT HANDLERS.
//   console.log(ev.target.innerHTML);
//   // ESlint error: Unexpected 'this'
//   // https://eslint.org/docs/latest/rules/no-invalid-this
//   // "Under the strict mode, this keywords outside of classes or
//   // class-like objects might be undefined and raise a TypeError.""
//   console.log(this.innerHTML); // this: h1Element.
//   // For this inside functions, this rule basically checks
//   // whether or not the function containing this keyword is
//   // a constructor or a method.
//   // Note that arrow functions have lexical this,
//   // and that therefore this rule checks their enclosing contexts.
//   // No error here. /lexical this here is the window.obj/
// });

// console.log(this);
