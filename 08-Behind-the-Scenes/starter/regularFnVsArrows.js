'use strict';

const person = {
  firstName: 'Antoan',
  year: 2000,

  // CORRECT !!!!
  calcAge: function () {
    console.log(2022 - this.year);

    // Pre ES6 solution
    const self = this; // preserving 'this' keyword. self/that

    const isMillenial = function () {
      console.log(self);
      // console.log(this.year >= 1981 && this.year <= 1996);
      console.log(self.year >= 1981 && self.year <= 1996); // ->PRE ES6 SOLUTION
    };
    isMillenial(); // regular function call, which means,'this will be undefined

    // Now in ES6, we have more modern & better solution.
    // And that SOLUTION is to use an ARROW FUNCTION.

    const isMillenialArrow = () => {
      // That works because arrow function does NOT have its own 'this'.
      // It takes parent's scope 'this'|calcAge Metod, in this case|this->person
      // ARROW function INHERITS THE 'THIS' keyword from parent's scope.
      console.log(this);
      console.log(this.year >= 1981 && this.year <= 1996);
    };
    isMillenialArrow();
  },

  // WRONG !!!!
  greet: () => {
    console.log(`Hi. I am ${this.firstName}`); // undefined
    // Arrow function DOES NOT get its own 'this' keyword.
    // It will use the 'this' keyword of the parent scope.
    // Parent scope of this 'greet' method is the GLOBAL scope.
    // Which GLOBAL scope has window object as 'this' keyword.
    // THIS {....} is NOT a scope, THAT'S OBJECT LITERAL. const obj = {....}.
    // That's just how we define objects.
  },
};

person.greet();
person.calcAge();

// When property does NOT exist on object, it returns undefined.

// ................
// arguments keyword.

const addExpr = function (...args) {
  console.log(args); // arr [1, 1] | arr [2, 2, 8, 12]
};

const addArrow = (...args) => {
  console.log(args); // // arr [1, 1] | arr [1, 2, 3, 4]
};

addExpr(1, 1); // arr [1, 1]
addExpr(2, 2, 8, 12); // arr [2, 2, 8, 12]
addArrow(1, 1);
addArrow(1, 2, 3, 4);
