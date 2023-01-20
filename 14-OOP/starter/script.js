'use strict';

// 206. What is Object-Oriented Programming?

// classical OOP is -> class-based OOP
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
 * Just like __init__ in Python.
 * @param {String} name
 * @param {Number} birthYear
 */
function Person(name, birthYear) {
  // Chech 4 steps below
  console.log(this); // empty {}

  // instance properties /available on all instances created through Person/
  this.name = name;
  this.birthYear = birthYear;

  // NEVER CREATE A METHOD INSIDE A CONTRUCTOR FUNCTION.
  // Attach methods on the prototype.
  // this.calcAge = function () {
  //   console.log(2037 - this.birthYear);
  // };

  console.log(this); // {birthYear: 2000, name: 'Tony}
  // the object is returned automatically. /Chech 4 steps below/
}

// This above is function declaration, but function expression would also work.
// Arrow function will NOT work, the 'this' of an arrow function is lexical.

// Calling the function/constructor with the new keyword.
// Behind the scenes are 4 steps of the 'new' keyword:

// 1. An empty object is created. {}
// 2. Function is called. In the fn call, the 'this' is set to the empty obj./1/
// 3. The created object is linked to a prototype/the obj recieves a prototype/
// a prototype is attached to the created object. (Person.prototype)
// 4. The created object is automatically returned from the constructor fn.

// instances/objects
const tony = new Person('Tony', 2000);
const jonas = new Person('Jonas', 2015);
const matilda = new Person('Matilda', 2007);
console.log(tony, jonas, matilda);

console.log(tony instanceof Person); // true | tony is an instance of Person

// function test(name, age) {
//   this.name = name;
//   this.age = age;
// }

// const a = test('Tony', 22);

// 209. Prototypes
// Each function in JS, automatically has a property 'prototype'

// const z = function () {
//   console.log('2');
// };

// console.log(z.prototype);

// All object created with a constructor function (ex.Person), will inherit:
// Person.prototype. (The Person.prototype is just attached to the instances)
// Person.prototype === tony.__proto__ === jonas.__proto__

Person.prototype.calcAge = function () {
  // this is set to the object that is calling the function(tony.calcAge),
  // this === tony obj
  console.log(2037 - this.birthAge);
};

// Person.prototype === tony.__proto__ === jonas.__proto__
tony.calcAge();

// No matter where the method is found: in an object or its prototype.
// In a method call, this is always the object before the dot. /tony.calcAge()/
