'use strict';

// We expolored how prototypal inheritance works in JS,
// using constructor functions, classes and Object.create method

// These techniques allow objects to inherit/access methods/properties
// from its prototype / __proto__ /

// F.constructor.prototype property === newly-created-object.__proto__.

// Let's now see 'real' inheritance, between CLASSES/F.constructors!

// Let's make 'Student' that inherits from 'Person'.

// Person parent class/F.constructor.
// Student child class/F.constructor.
// Student is subtype of Person.
// A student is also a person, more specific person though.

// Let's implement this inheritance using Function constructors.

// This way will allow us to understand exactly how,
// we set up the prototype chain.
// In order to allow inheritance between the prototype properties
// of two different function constructors.

// constructor function.
function Person(firstName, birthYear) {
  this.firstName = firstName;
  this.birthYear = birthYear;
}

// method
Person.prototype.calcAge = function () {
  console.log(2037 - this.birthYear);
};

// We usually want a child class to have the same functionality as the parent class,
// but with some additional functionality.
// We use the same params, but then also some additional ones.
function Student(firstName, birthYear, course) {
  // check what the 'new' operator DO./4 steps(ctrl+F in script.js)/

  // (this -> newly-created object -> object reference),
  // so we work on the same object, in this Fn. and when we call Person from here.
  // We want the 'this' in Person constructor, to be the same 'this' in this constructor

  // filling the newly-created object with properties
  Person.call(this, firstName, birthYear);
  // ABOVE AND BELOW WORKS THE SAME.
  // Person.prototype.constructor.call(this, firstName, birthYear);

  // Person(firstName, birthYear);
  // Regular fn call => 'this' in EC is set to 'undefined'.

  this.course = course;
}

// Set Student.prototype.__proto__ === Person.prototype/ inheritance chain /
Student.prototype = Object.create(Person.prototype);

// method
Student.prototype.introduce = function () {
  console.log(`I am ${this.firstName} and I study ${this.course}`);
};

// THE OBJECT __PROTO__ AND F.prototype is EXACTLY THE SAME OBJECT
const student1 = new Student('Sarah', 2002, 'JS');

student1.introduce();

// student1.calcAge();
