'use strict';
/*
// at the start of each script. ALWAYS. u can add comment before strict, but no code.
// it shows more errors and forbids us to do certain things. also activates a reserved words list.
// ex. 'interface'.

let hasDriversLicense = false;
const passTest = true;

// use strict will throw reference error if variable is misspelled.
// And will be silence if there is no 'use strict';.
// But I have eslint installed.

if (passTest) hasDriversLicense = true;

if (hasDriversLicense) console.log('He has drivers license');

// const interface = 'a';

// 33. Functions

function logger() {
  // function body.
  console.log('My name is Antoan');
}

logger(); // invoking the function / running the function / calling the function.
logger();
logger();

// fruit here is a parameter.
function fruitProcessor(fruit) {
  return `${fruit} juice`;
}

const juiceMade = fruitProcessor('apple'); // here 'apple' is an argument.

console.log(juiceMade);

console.log(fruitProcessor('banana')); // here 'banana' is an argument.

*/

// 34. Function Declarations vs. Function Expressions

// THIS IS CALLED FUNCTION DECLARATION.
// because we simply use the function keyword to declare a function,
// similar to declaring a variable.
function calcAge1(birthYear) {
  return 2022 - birthYear;
}

console.log(calcAge1(2000));

// FUNCTION EXPRESSION -> function with no name(anonymous function),
// ALL THIS
// function (birthYear) {
//  return 2022 - birthYear;
// }

// IS EXPRESSION, and an expression produces value. This way we can store the value.
// in this case we store it in calcAge2, which then this will be the function.
const calcAge2 = function (birthYear) {
  return 2022 - birthYear;
};

// calcAge2 -> is a variable which HOLDS/CONTAINS THE FUNCTION VALUE FROM THE EXPRESSION.

const age2 = calcAge2(1994);
console.log(age2);

// Important to know that we have these two types of functions in JS.

// In some places we will actually need to write the functions like an expression.
// Through the course we will see it.

// !!! In JS functions are actually JUST VALUES. just like a number or a string, or a boolean value.
// So function is NOT a type, it's NOT like a number type or string type. It's just a value. like the number 3.
// So if it's a value, we can store it in a variable, just like 'const a = 3' the number.

// KEEP THIS IN MIND.

// CHECK THIS: Immediately invoked function expression