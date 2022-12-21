'use strict';

// 93. Scoping in Practice.

/**
 * Function Declaration(Hoisted).
 * Defined in global scope. / Top-Level Code /
 * @param {number} birthYear
 * @return {number} age
 */
function calcAge(birthYear) {
  // Function scope

  /*
  https://dev.to/pranav016/advanced-javascript-series-part-42-scope-chains-and-their-working-lexical-and-variable-environments-19d5
    The variable environment maps the local scope of a given environment.
    In other words, the variable environment stores those variables defined
    within the given working code block {}.
  */
  const age = 2027 - birthYear;
  // scope chain ->
  // this scope checks scope above for that variable and so on. (firstName)
  // Variable Look Up.

  /**
   * print age
   */
  function printAge() {
    // Function scope
    const output =
      `Name: ${firstName}.` +
      `Your are ${age} years-old,` +
      `born in ${birthYear}.`;
    console.log(output);

    if (birthYear >= 1981 && birthYear <= 1996) {
      // var millenial = true; // function scoped
      const str = `Oh, and you're a millenial, ${firstName}.`;
      console.log(str);

      /**
       * Functions are also block scoped, starting in ES6.
       * Cannot call it outside this block.
       * @param {number} a
       * @param {number} b
       * @return {number}
       */
      function add(a, b) {
        return a + b;
      }
      add(1, 1); // Works, calling from the block in which add fn is declared.
    }
    // console.log(str); | Error - const & let are block scoped. (ES6)
    // console.log(millenial); | Works - var is function scoped. (Pre ES6 USE)
    // add(); | Error - function is block scoped. (ES6)
  }

  printAge();

  return age;
}

const firstName = 'Antoan';
calcAge(1994); // function code is executed once it's actually CALLED.
