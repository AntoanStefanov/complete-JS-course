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

// tony
// Person {name: 'Tony', birthYear: 2000}

// Person.prototype
// {constructor: ƒ} constructor: ƒ Person(name, birthYear)[[Prototype]]: Object

// Person.prototype.__proto__
// {constructor: ƒ, __defineGetter__: ƒ, __defineSetter__: ƒ, hasOwnProperty: ƒ, __lookupGetter__: ƒ, …}

// Object.prototype
// {constructor: ƒ, __defineGetter__: ƒ, __defineSetter__: ƒ, hasOwnProperty: ƒ, __lookupGetter__: ƒ, …}

console.log(tony.__proto__ === Person.prototype);
// tony's prototype === function Person prototype PROPERTY

console.log(Person.prototype.__proto__ === Object.prototype);
// function Person prototype PROPERTY ===  Object prototype PROPERTY

console.log(Object.prototype.__proto__ === null);
// Top of prototype chain -> null.

// Tony object is created by the Person function constructor,
// so tony's __proto__ is Person.prototype (property/just an object).

// Person.prototype(property/just an object) is created by the Object function constructor,
// so Person.prototype's __proto__ is Object.prototype (property/just an object)

// Person is a constructor function, Object is a constructor function.

// Every function has a prototype PROPERTY which is set as __proto__ to the
// newly created objects from that constructor function.

// At the end of the day, __proto__ is just an object
// or null at the end of the chain (Object.prototype.__proto__).

// If instance of a constructor does not have OWN property/method,
// goes up the the prototype chain(__proto__) to search for it.

// Every function has a prototype PROPERTY,
// Every object has a real prototype, __proto__.

// 211. Prototypal Inheritance on Built-In Objects

console.log(tony.__proto__); // Person prototype property (Person.prototype)
// Person prototype property is just a regular object, that's why:
console.log(tony.__proto__.__proto__); // Object prototype property/Top of chain
console.log(tony.__proto__.__proto__.__proto__); // null.

const practice = function () {
  // https://javascript.info/call-apply-decorators
  /**
   *
   * @param {num} numOne
   * @param {num} numTwo
   * @return {num}
   */
  function sum(numOne, numTwo) {
    // Heavy CPU usage.
    return numOne + numTwo;
  }

  const hash = function (numOne, numTwo) {
    return `${numOne}+${numTwo}`;
  };

  const cachingDecorator = function (func, hash) {
    const cache = new Map();
    // func&hash args and cache map, will be stored in cachingDecorator CLOSURE.
    return function (numOne, numTwo) {
      const key = hash(numOne, numTwo);

      if (cache.has(key)) return cache.get(key);

      const result = func(numOne, numTwo);
      cache.set(key, result);

      return result;
    };
  };

  sum = cachingDecorator(sum, hash);

  console.log(sum(1, 1));
  console.log(sum(1, 1));
  sum(2, 2);

  const company = {
    sales: [
      {name: 'John', salary: 1000},
      {name: 'Alice', salary: 1600},
    ],
    development: {
      sites: [
        {name: 'Peter', salary: 2000},
        {name: 'Alex', salary: 1800},
      ],
      internals: [{name: 'Jack', salary: 1300}],
    },
  };

  // https://javascript.info/recursion
  /**
   *
   * @param {object} department
   * @return {number} sum
   */
  function sumSalaries(department) {
    // Base case.
    if (Array.isArray(department)) {
      return department.reduce(
        (salariesSum, employee) => salariesSum + employee.salary,
        0,
      );
    }

    let sum = 0;
    for (const departmentObj of Object.values(department)) {
      sum += sumSalaries(departmentObj);
    }

    return sum;
  }

  sumSalaries(company);
};

practice();

console.log(Person.prototype.constructor); // points to the Person fn, ITSELF.
console.dir(Person.prototype.constructor); // check a function props /prototype/

const arr = []; // new Array() === []
console.log(arr.__proto__ === Array.prototype);
// arr proto is the prototype property of the Array function(constructor).

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter
// Array.prototype.filter()

// The filter method, lives in the prototype property of the Array fn/constructor,
// that's why in MDN is 'Array.prototype.filter()'

console.dir(() => 2); // ARROW FUNCTION DOES NOT HAVE PROTOTYPE PROPERTY!!!
console.dir(function () {
  return 2;
});

// A function itself is also an object, therefore it also has a prototype.
// That's why we can call methods on functions, it's because they are objects,
// and objects have prototypes(__proto__),
// called Function prototype,
// bcs the function is created with the Function constructor function.
// Person.__proto__.constructor => Function()/regular fn/, just like,
// tony.__proto__.constructor => Person()/regular fn/
