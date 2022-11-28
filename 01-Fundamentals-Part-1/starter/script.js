// 10. Values and Variables
/*
console.log('Tony');
console.log(23);

let firstName = 'Antoan';
console.log(firstName);

let PI = 3.14;


// 12. Data types
true; // boolean type
// console.log(true);

let javascriptIsFun = true; // boolean type

// console.log(javascriptIsFun);
// console.log(typeof true); // typeof is an operator just like +, - operators.
console.log(typeof javascriptIsFun);
// console.log(typeof 21);
// console.log(typeof 'Hello');

javascriptIsFun = 21;
console.log(typeof javascriptIsFun);

let firstName; // defining a varaible WITH NO value.
console.log(firstName); // returns undefined as value of the variable.
console.log(typeof firstName); // returns undefined as type in string format.

// error in typeof operator!
console.log(typeof null);
// returns object, which is bug.
It should return null just lke undefined data type
// not resolved because of legacy reasons.

// 13. let, const, var

let age = 30; // let used when we will change the variable durin execution.
age = 31; // here we reassign a value to the variable.
// MY IDEA OF IT. The birthYear is relative for each person.
// But PI is THE SAME for each person, which means its CAPITAL.
// Kinda like analogy.
const birthYear = 2000; // or const BIRTH_YEAR ???
// The uppercase is more for things that are really impossible to change,
// like pi or Plank's constant or anything like that.

// birthYear = 2001; // Cannot reassign the variable. Cannot be mutated.
It's constant variable.

// We cannot create empty constant variables.
// const ID;

// ??  When using const - variable naming convention ? UPPER_CASE or no ?

// DO NOT USE VAR. it's before ES6.

// very bad idea. This will NOT create a variable in the current scope.
// JS will create a property on the global object.
// lastName = 'Risotto';

// !!!!!!!!
// use const BY DEFAULT, let when u are rEALLY SURE that the variable
// needs to change at some point in future.

// As a general rule, you should always declare variables with const,
// if you realize that the value of the variable needs to change,
// go back and change it to let.

// 14. Basic Operators

const futureYear = 2037; // use const by default.

const ageTony = futureYear - 2001; // minus operator.
const ageMiha = futureYear - 2018;
console.log(ageTony, ageMiha);

console.log(ageTony * 2, ageMiha / 2, 2 ** 4); // exponentiation operator **

// + operator can be used to join/concatenate strings.

const firstName = 'Antoan';
const lastName = 'Stefanov';

console.log(firstName + ' ' + lastName);

// typeof operator

// assignment operators -> =
let x = 10 + 5; // = is assignment operator. + operator.
// + operator is executed before assignment operator (=).
// BASED ON operator precedence.
console.log(x); // 15.
x += 10; // x = x + 10; 25.
x *= 4; // x = x * 4; 100.
console.log(x); // 100
x++; // x = x + 1;
console.log(x); // 101;
x--;
x--;
console.log(x); // 99;

// comparison operators -> produces boolean values.
// < > <= >=.
// console.log(ageTony > ageMiha); // true.

const isFullAge = ageMiha >= 18;
console.log(isFullAge);


// 15. Operator Precedence

*/

// 17. Strings and Template Literals

const firstName = 'Antoan';
const currentJob = 'learner';
const birthYear = 2000;
const year = 2022;

// year - birthYear returns number, how it's added as a string ?
// anwser -> type coercion. IN this case, Js will basically convert the number to a string.
// so concatenation is possible.
const message =
  "I'm " + firstName + ', a ' + (year - birthYear) + ' years old ' + currentJob;
console.log(message);

// from ES6 we have a much better tool to create strings like the above one.
// It's called Template literals.

//  write string as template, and insert the variables, then they will be replaced.

const secondMessage = `I'm ${firstName}, a ${
  year - birthYear
} years old ${currentJob}!`;
console.log(secondMessage);

// `` with no variables is possible too
console.log(`Hello from ticks.`);

// `` for multiline string

console.log(`String
multiple
lines`);
