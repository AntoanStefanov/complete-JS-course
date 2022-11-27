// 10. Values and Variables
/*
console.log('Tony');
console.log(23);

let firstName = 'Antoan';
console.log(firstName);

let PI = 3.14;
*/

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