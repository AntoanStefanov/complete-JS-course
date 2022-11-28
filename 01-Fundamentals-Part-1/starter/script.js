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
console.log(typeof null); // returns object, which is bug. It should return null just lke undefined data type
// not resolved because of legacy reasons.

*/

// 13. let, const, var

let age = 30; // let used when we will change the variable durin execution.
age = 31; // here we reassign a value to the variable.
// MY IDEA OF IT. The birthYear is relative for each person. But PI is THE SAME for each person, which means its CAPITAL. 
// Kinda like analogy.
const birthYear = 2000; // or const BIRTH_YEAR ???
// The uppercase is more for things that are really impossible to change,
// like pi or Plank's constant or anything like that.

// birthYear = 2001; // Cannot reassign the variable. Cannot be mutated. It's constant variable.

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