'use strict';

// 1. Method(function attached to an object) ->
// 'this' = <Object that is calling the method>

// const antoan = {
//   name: 'Antoan',
//   year: 2000,
//   calcAge: function () {
//     return 2022 - this.year;
//   },

//   // Arrow functions -> 'this' = <this of parent function(lexical this)>.
//   // Do NOT get own 'this'.
//   showYear: () => console.log(this.year), // in debug 'this' is defined,
//   // but, in debug console 'this' here is 'window' object.
//   // https://eslint.org/docs/latest/rules/no-invalid-this ! REASONS FOR THAT !
// };

// antoan.calcAge();
// antoan.showYear();

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

// ***************************************************************************

// 97. The this Keyword in Practice

// https://eslint.org/docs/latest/rules/no-invalid-this !!!

// For this inside functions, this rule basically checks
// whether or not the function containing this keyword
// is a constructor or a method.
// Note that arrow functions have lexical this, and that therefore
// this rule checks their enclosing contexts.

console.log(this); // Window Object.

// Regular function -> not attached to any object. No owner.
// Has it's own 'this', which is undefined.
const add = function () {
  // Always use strict mode.
  // Uncomment
  // console.log(this); // undefined in strict mode|Window Object in sloppy mode
  return 2 + 2;
};

add();

// Arrow function.
const addArrow = () => {
  // Always use strict mode.
  // Arrows don't have their own 'this' keywords.
  console.log(this); // Window Object In Practice. Undefined in variable object.
  // Debug it, so u can check to get sure.
  // addArrow.this -> undefined
  // this -> Window Object.
  return 2 + 2;
};

addArrow();

// NORMAL/REGULAR FUNCTIONS HAS THEIR OWN 'THIS' KEYWORD.

// ARROW FUNCTIONS DOES NOT HAVE THEIR OWN 'THIS' KEYWORD.
// ARROW FUNCTIONS INHERIT 'THIS' KEYWORD FROM PARENT (SCOPE/FUNCTION). Lexical

const antoan = {
  year: 2000,

  add: function () {
    // 'this' keyword is dynamic. NOT STATIC.
    console.log(this); // (current) Object: {year: 2000, add: ƒ}|Method call:108
    console.log(2022 - this.year);
    return 2 + 2;
  },

  arrow: () => {
    console.log(this); // Window.
    // (Takes Parent's Scope - this). In this case, GlobalScope's 'this'.
  },
};

antoan.arrow();
antoan.add(); // antoan -> owner of method -> 'this' in method -> antoan.

const mary = {
  year: 2001,
};

// Method borrowing. (Copying). No duplicates, just copying.
mary.add = antoan.add; // COPY method, from one object to another.
mary.add();

mary.add = function () {
  console.log('reformed by Mary');
};

mary.add();

antoan.add(); // 22

const f = antoan.add; // COPYING FUNCTION TO A NEW VARIABLE.FUNC IS JUST A VALUE
f(); // Now, that call is just a regular function call, 'this' will be undefined

// DEBUG THIS ABOVE . OBSERVE !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
