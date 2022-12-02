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

// 34. Function Declarations vs. Function Expressions

// THIS IS CALLED FUNCTION DECLARATION.
// because we simply use the function keyword to declare a function,
// similar to declaring a variable. const foo = 42; / function foo() {}
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

// The main difference between function declarations and functions expressions is that
// we can call function declarations BEFORE they are defined in the code.

console.log(sumNums(2, 3));

function sumNums(a, b) {
  return a + b;
}
// This happens because of a process called 'hoisting'. - future section/lecture.
// It's not such a good idea in many cases,
// But do we use it that way?

// Which way should I use (declaration or expression) ?
// Often times is just a matter of personal preference.
// He prefers function expressions, because,
// this then forces him into a nice structure,
// where he has to define all the functions first, at the top of the code,
// And only then he can call them, this makes the code a bit nicer and more structured.
// Also he likes having everything stored in variables, both values and functions
// that's his personal preference. Many devs dont agree with it.
// And they prefer to use function declarations instead.
// If I prefer function declarations, just use it then.
// No problem at all.
// But I still need to know both of them(expression and declaration functions).
// Both have place in JS.

*/

// 35. Arrow Functions

// Third type of function, it was added to JS in ES6.
// That's the arrow function.

// An arrow function is simply a special form of function expression,
//  that is shorter and therefore faster to write.
// BUT IT'S STILL FUNCTION EXPRESSION.

// Function expression
const calcAge2 = function (birthYear) {
  return 2022 - birthYear;
};

console.log(calcAge2(2000));

// Arrow expression -> my way
const calcAge3 = (birthYear) => {
  return 2022 - birthYear;
};

console.log(calcAge3(2001));

// Arrow expression -> his way
// ctrl + , -> search -> arrow parens || prettier.
// https://hudochenkov.com/posts/arrow-function-parentheses/ !!!!
// https://arcticicestudio.github.io/styleguide-javascript/rules/arrow_functions.html#single-argument-parentheses !
// when we want one parameter, we can OMIT the oval brackets ().
// https://eslint.org/docs/latest/rules/arrow-parens !!
// when function body(the code block) is one line, we can OMIT 'return' and the curly brackets.
// the return happens implicitly. Quietly. So, the value will be automatically returned.
const calcAge4 = (birthYear) => 2022 - birthYear;
// Excellent for simple one-liner functions. This is gonna be extremely helpful in certain situations.

console.log(calcAge4(2002));

// when more than 1 lines of code is needed, we put it in code block with curly braces.
// Also we need the return keyword.
const yearsUntilRetirement = (birthYear, firstName) => {
  const age = 2022 - birthYear;
  return `${firstName} has ${65 - age} until retirement`;
};

console.log(yearsUntilRetirement(2000, 'Antoan'));

// What type of funtion should I use ?
// Arrow function for everything since they are so easy to write? - NO, but it's also complicated!
// It's complicated because there is another fundamental difference,
// between the arrow function and the more traditional functions(function declarations and function expressions).
// It's the fact that arrow functions do NOT get a so-called 'this' keyword. (in further lecture).
// We'll keep using mainly the traditional functions(probably the function expressions most),
// except for very simple one - liner functions(arrow functions).
// that does not mean Arrow functions are not important. They are important!

// He even loves them and use them all the time. Sometimes he doesn't write regular functions at all.
