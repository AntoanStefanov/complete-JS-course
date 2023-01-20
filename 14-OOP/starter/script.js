'use strict';

// 206. What is Object-Oriented Programming?

// traditional OOP is -> class-based OOP
// JS OOP is -> prototype-based OOP

// A class itself is not an object.
// chertej za kushta -> realna kushta.
// Shablon(class) -> Obekt(instance/real object/)
// blueprint -> instance

// The beauty of this, is that we can use this blueprint
// to create as many instances/objects/ as we want.

// these instances/objects/ can have different data/properties/,
// but they share the same functionality/methods/.

// How do we actually design a class?
// How do we model real-world data into classes?

// Like an architecture student, asking:
// "How do we actually plan and design a house?"

// The answer is NOT straightforward.
// There is NO single correct way of designing classes.

// There are, however, 4 fundamental principles of OOP()
// There are, however, 4 fundamental principles that
// can guide us towards a good class implementation.

// Abstraction | Encapsulation | Inheritance | Polymorphism

// These techniques can actually be used outside of OOP,
// but they are especially relevant in this context.

// https://www.udemy.com/course/the-complete-javascript-course/learn/lecture/22649033#questions/13444264
// 9:49.

// 207. OOP in JavaScript

// 1. Prototypes.

// Prototype.

// All objects in JS are linked to a certain prototype object. We say:
// Each object has a prototype.

// The prototype object contains methods and properties,
// that all the objects that are linked to that prototype can access and use.

// This behavior is usually called 'prototypal inheritance'.

// All methods and properties of the prototype object/образец/ are accessible to
// all objects that (have/are linked to) that prototype/образец/.

// Objects inherit methods and properties from that prototype. /образец/

// !
// In 'classical OOP', the class inherits from other class.
// in prototype inheritance, an instance inherits from a class.
// !

// const test = {};
// test.__proto__ -> Object
// test.__proto__.__proto__ -> null

const x = [1, 2, 3];

// map method is on the instance's prototype(Array prototype object).
x.map((x) => x + 1);

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map
// the method in MDN is actually called:
// Array.prototype.map()

// How to implement PROTOTYPAL INHERITANCE in JS:

// 1. Constructor Function

// 2. ES6 Classes

// 3. Object.create()

// 208. Constructor Functions and the new Operator

// We can use constructor function to build an object using a function.

// A constructor function is actually a completely normal function.

// The difference between constructor function and regular function is that
// we call a constructor function with the new operator.

// Constructor function for a person.

/**
 * Constructor function for a person.
 * constructor function has PascalCase convention().
 * This function produces an object, in this case for a Person.
 * @param {String} name
 * @param {Number} birthYear
 */
function Person(name, birthYear) {
  this.name = name;
  this.birthYear = birthYear;
}

// This above is function declaration, but function expression would also work.
// Arrow function will NOT work, the 'this' of an arrow function is lexical.

// calling the function/constructor with the new keyword.
const me = new Person('Tony', 2000);
const jonas = new Person('Jonas', 2015);
console.log(me, jonas);

// function test(name, age) {
//   this.name = name;
//   this.age = age;
// }

// const a = test('Tony', 22);
