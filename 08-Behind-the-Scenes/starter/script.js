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
    const output = `Name: ${firstName}. \n Your are ${age} years-old, born in ${birthYear}.`;
    console.log(output);
  }

  printAge();

  console.log(firstName);
  // console.log(lastName);
  // Error undefined (fn called before variable declaration).
  return age;
}

const firstName = 'Antoan';
calcAge(2000); // function code is executed once it's actually CALLED.
const lastName = 'Stefanov';
