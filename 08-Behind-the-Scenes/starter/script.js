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
  console.log(firstName);
  return age;
}

const firstName = 'Antoan';
calcAge();
