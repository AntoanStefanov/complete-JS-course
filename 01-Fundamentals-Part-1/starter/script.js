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

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Operator_Precedence#table

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



// 18. Taking Decisions: if

const age = 15;

// if else control structure.
if (age >= 18) {
  console.log('Sarah can start driving license.');
} else {
  const yearsLeft = 18 - age;
  console.log(
    `Sarah cannot start driving license. Come back after ${yearsLeft} years.`
  );
}

// second example.
const birthYear = 2000;
let century;

if (birthYear <= 2000) {
  // if we declared century in this block, It will not be accessible outside the block.
  // let century = 20;
  century = 20;
} else {
  // century in this block, It will not be accessible outside the block.
  // let century = 21;
  century = 21;
}

console.log(century);

*/

// 20. Type Conversion and Coercion

// Type Conversion
const inputYear = '2020'; // string for example user input. It come as string.
console.log(Number(inputYear)); // the original value is not converted.
console.log(inputYear + 18); // 202018 -> string then adding, will result as string.
console.log(Number(inputYear) + 18); // 2038

// What if we try to convert something to a number that is impossible to convert ?

console.log(Number('Antoan')); // NaN -> Not A Number.  ! NaN -> INVALID NUMBER !
// JS returns this NaN value whenever an operation that involves numbers fails to produce a new number.
console.log(typeof NaN); // type is number.

console.log(String(23), 23); // 23 as string (white color).

// JS can only conver to three types. -> Number, String, Boolean
// Cannot be converted to undefined or null.

// We rarely have to convert anything manually, JS will convert it automatically. /Type Coercion/.

// Type Coercion
// type coercion happens when two value have different types.
// JS will convert one of the value type to match the other one.

//           string + number + string
console.log('I am ' + 23 + ' years old'); // I am 23 years old

// using strings + operator used triggers a coercion to strings.
// this is why number is converted to string.

// not all the operators do type coercion to /string.

// - operator triggers a coercion to numbers.
console.log('23' - '10' - 3); // 10
// - operator triggers the opposite coercion of +.
// JS here converted strings to numbers.

// + operator triggers a coercion to strings.
console.log('23' + '10' + 3); // 23103

// * operator triggers a coercion to numbers.
console.log('23' * '2'); // 46
// ^ same goes for / operator.
console.log('23' / '2'); // 11.5

let n = '1' + 1;
console.log(n); // 11 as string
n -= 1;
console.log(n); // 10 as number

console.log('11', 11); // white, yellow

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Operator_Precedence#table
console.log(2 + 3 + 4 + '5'); // left to right(+ operator) => 2 + 3 = 5 + 4 = 9 +'5' = '95'

console.log('10' - '4' - '3' - 2 + '5');
// left to right(- operator) => 10 - 4 = 6 - 3 = 3 - 2 = 1 + '5' = '15'

// LEARN AND EMBRACE TYPE COERCION.