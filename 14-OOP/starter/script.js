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
// 3. Function.prototype property (regular object) is set to,
//        [[Prototype]] / __proto__ for the newly created object.
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

/**
 * @param {String} make Factory
 * @param {Number} speed KM/H
 */
function Car(make, speed) {
  this.make = make;
  this.speed = speed;
}

Car.prototype.accelerate = function () {
  this.speed += 10;
  console.log(this.speed);
};

Car.prototype.brake = function () {
  this.speed -= 5;
  console.log(this.speed);
};

const carBMW = new Car('BMW', 120);
const carMercedes = new Car('Mercedes', 95);

console.log(carBMW);
carBMW.brake();
console.log(carMercedes);
carMercedes.accelerate();

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Inheritance_and_the_prototype_chain

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Inheritance_and_the_prototype_chain
// #building_longer_inheritance_chains

function Constructor() {}

const obj = new Constructor();
// obj ---> Constructor.prototype ---> Object.prototype ---> null

function Base() {}
function Derived() {}
// Set the `[[Prototype]]` of `Derived.prototype`
// to `Base.prototype`
Object.setPrototypeOf(Derived.prototype, Base.prototype);

const obj1 = new Derived();
// obj ---> Derived.prototype ---> Base.prototype ---> Object.prototype ---> null
console.log(obj);
console.log(obj1);

function Vehicle(factory, maxSpeed) {
  this.factory = factory;
  this.maxSpeed = maxSpeed;
}

Vehicle.prototype.info = function () {
  console.log(`Made in ${this.factory}. Max speed: ${this.maxSpeed}`);
};

function Automobile(factory, maxSpeed, color) {
  Vehicle.call(this, factory, maxSpeed); // call parent constructor
  this.color = color;
}

Automobile.prototype.startEngine = function () {
  console.log(`Starting engine on car made in ${this.factory}`);
};

Object.setPrototypeOf(Automobile.prototype, Vehicle.prototype);
// this sets a __proto__ to the prototype property (of the Constructor function)
// Now, Vehicle.prototype is __proto__ for Automobile.prototype. (proto chain).
// So, when we call automobile.info(),
// it will find it, in Vehicle.prototype property|Automobile.prototype.__proto__

// Created objects with constructor fn, their __proto__ is the fn prototype property,
// automobile.__proto__ === Automobile.prototype | true
// automobile.__proto__.__proto__ === Vehicle.prototype | true

// https://stackoverflow.com/questions/6617780/how-to-call-parent-constructor

// OR (NOT REALLY)

// Automobile.prototype = Object.create(Vehicle.prototype); // keeps th proto clean
// Automobile.prototype.constructor = Automobile; // repair the inherited cnstrctor

const vehicle = new Vehicle('Pegeout', 120);
vehicle.info();

const automobile = new Automobile('BMW', 150, 'green');
automobile.info();

// ES6 Classes
// https://javascript.info/class#class-fields (class properties)
// https://stackoverflow.com/questions/57608525/what-are-class-fields-in-javascript

// Classes in JS, do NOT work like traditional classes.
// Classes in JS are just syntatic sugar over what we learned, prototypes.
// They implement prototypal inheritance, behind the scenes.

// classical OOP is -> class-based OOP
// JS OOP is -> prototype-based OOP

// class declaration
class PersonCl {
  // 1st. add constructor method. (constructor is a method of the class)
  constructor(firstName, birthYear) {
    // check the 4 steps of the 'new' operator, same thing here.
    // properties are set here.
    this.firstName = firstName;
    this.birthYear = birthYear;
  }

  // Methods. These methods will be on the prototype/__proto__/ of the object.
  // Just like with the constructor function, prototypal inheritance.

  // With no class declaration, we would write PersonCl.prototype.calcAge={...},
  // to add a method for the newly created objects.

  // person1.__proto__ === PersonCl.prototype /class is just a special function/
  // PersonCl acts just like any other function constructor,
  // same as what we wrote above, just looks better, syntax sugar.

  // this method will be automatically added to the PersonCl.prototype property,
  // so that newly created objects, can reach it,
  // bcs we set this property as prototype/__proto__/ . /'new' operator 4 steps/
  // person1.__proto__ === PersonCl.prototype/property/.
  calcAge() {
    return 2037 - this.birthYear;
  }
}

const person1 = new PersonCl('John', 2000); // constructor method will be called
console.log(person1.calcAge());

// PersonCl is class, but class is just a function, and each function has
// prototype property. And this property is used as __proto__ of the objects.

// We can also add a method manually, to see that PersonCl.prototype property,
// is set as __proto__(prototype) of the objects.
PersonCl.prototype.sayHi = function () {
  console.log('Hello');
};
person1.sayHi();

// class just hides the true nature of prototypal inheritance in JS.

// just like functions, we have and class expressions.
// const PersonCl = class {...};

// There are class declarations/expressions, bcs classes are just special kind of
// functions.

// So, altough we use the class keyword, behind the scenes, classes are still
// functions, therefore we have class expressions & class declarations.

// const xx = {
//   x: function () {
//     return 1;
//   },

//   // This is the same as methods in the class.
//   y() {
//     return 2;
//   },
// };

// console.log(xx.y());

// 1. Classes are NOT hoisted,
// even if they are class declarations, bcs fn declarations are hoisted.
// ReferenceError: Cannot access 'PersonCl' before initialization /if you try/

// 2. Just like functions(they are actually functions), classes are first-class
// citizens(we can pass them into functions, return them from functions)

// 3. Body of a class is always executed in strict mode. Even if not activated,
// for the script, all code that is in the class is executed in strict mode.

// constructor functions or classes ?

// constructor functions are NOT old/depricated syntax,
// 100% fine to use them.

// Question of personal preference.

// Some ppl say that classes are really bad in general, and no one should be
// using them, simply bcs they hide the true nature of JS.

// But Some ppl dont agree with that, and think it's absolutely OKAY to use
// classes, as long as you understand everything in the previous lectures,
// prototype and prototypal inheritance.

// 214. Setters and Getters

// https://javascript.info/property-accessors

// Every object in JS, can have setter and getter properties.
// We call these special properties -> accessor properties

// There are two kinds of object properties.

// The first kind is data properties. We already know how to work with them.
// All properties that we’ve been using until now were data properties.

// The second type of property is something new. It’s an accessor property.
// They are essentially functions that execute on getting and setting a value,
// but look like regular properties to an external code.

// Accessors properties are basically functions, but
// outside looks like regular properties

// using getters and setters in object literal.(any object can have these props)
const person = {
  firstName: 'John',
  lastName: 'Rotyen',

  get fullName() {
    return `${this.firstName} ${this.lastName}`;
  },

  set fullName(value) {
    [this.firstName, this.lastName] = value.split(' ');
  },

  sayHi() {
    console.log(this.firstName + ' ' + this.lastName + ' ' + 'says Hi');
  },

  test: function () {
    return 1;
  },
};

console.log(person.fullName);
person.sayHi();
console.log((person.fullName = 'Roy Troy'));
person.sayHi();

// Classes also have getters/setters and they do indeed work the same way/above/

class Person1 {
  constructor(fullName, birthYear) {
    // https://www.javascripttutorial.net/es6/javascript-getters-and-setters/
    this.fullName = fullName;
    this.birthYear = birthYear;
  }

  // static methods
  static heyFromClass() {
    console.log('Hey from class');
  }

  // instance methods/added to the F.prototype property aka to objects __proto__
  hello() {
    console.log(`Hello I am ${this.fullName}`);
  }

  // Getters/setters can be very useful for data validation.

  // just like any other methods, there are set on the F.prototype property,
  // from there, on the prototype(__proto__) of the objects.
  set fullName(name) {
    if (!name.includes(' ')) return;
    // stackoverflow, we call fullName setter recursively, if there is NO '_'.
    this._fullName = name;
  }

  get fullName() {
    return this._fullName;
  }

  get age() {
    return 2037 - this.birthYear;
  }
}

const person2 = new Person1('Arti Edinov', 2000);
person2.fullName = 'Zorro Asimov';
const person3 = new Person1('Jessica Edinova', 2007);

console.log(person2.fullName);
console.log(person2.age);

console.log(person3.fullName);
console.log(person3.age);
// https://www.javascripttutorial.net/es6/javascript-getters-and-setters/
// https://javascript.info/property-accessors

// 215. Static Methods

// Usually, static methods are used to implement functions
// that belong to the class as a whole, but not to any particular object of it.

// they are attached literally on the class/fn constructor (Person.staticMethod)
// console.dir(Person) -> there it is the static method, side by side with the
// prototype property.
// Therefore, the created objects do NOT inherit this method, bcs
// the objects inherits from the prototype PROPERTY of the class/fn constructor.

// So, we can use a static method on an array object ([1, 2, 3])

// Example: Array.from

// The reason for static methods, is simply, so that the developers know,
// that it is related to Arrays(for example).

// We could also say that the from method is in the Array namespace.

// Number.parseFloat() is also a static method(attached on the F.constructor/class).
// so we know that parseFloat method is related to Numbers.

// We use this static methods, kinda like helpers, that should be related to
// a certain F.constructor/class(Array, Number, Person, ...)

Person1.hey = function () {
  console.log('Hey');
  console.log(this); // the constructor function(Person1).
  // It's bcs we call the method with Person1/Person1.hey()/, so this is Person1

  // !this === the object calling the method! (Person1.hey(), this === Person1)
};

Person1.hey();
Person1.heyFromClass();

person3.hello();
// https://javascript.info/class#summary
