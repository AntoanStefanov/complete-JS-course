'use strict';

// Classes are really just a layer of abstraction over constructor functions.
// Syntax sugar.

class Person {
  constructor(fullName, birthYear) {
    this.fullName = fullName; // setter called.
    this.birthYear = birthYear;
  }

  calcAge() {
    console.log(2037 - this.birthYear);
  }

  greet() {
    console.log(`Hi, I am ${this.fullName}`);
  }

  get fullName() {
    return this._fullName;
  }

  set fullName(value) {
    if (!value.includes(' ')) return; // valid name is with space/ex.Miro Pejov/
    // if this.fullName = value, this fn will be called non-stop, so do this:
    this._fullName = value;
  }
}

const miro = new Person('Miro Blajev', 2003);
console.log(miro.fullName); // getter called
miro.greet();

// To implement inheritance between two ES6 classes, we need two things:
// 1. extends keyword/sets the Student.prototype.__proto__ to Person.prototype prop./prototype chaining
// 2. super function == constructor function of the parent class.

class Student extends Person {
  constructor(fullName, birthYear, course) {
    // Calling super fn -> ALWAYS FIRST:
    // super fn call is responsible for creating the 'this' keyword in that subclass.
    super(fullName, birthYear); // calling Parent cnstrctor(passing 'this' also)
    this.course = course;
  }

  introduce() {
    console.log(`My name is ${this.fullName} and I study ${this.course}`);
  }

  // Polymorhism,
  // Overwriting a method. That way the objects have polymorhic behavior,
  // the objects have different form of the same method,
  // one method in parent class and one here.
  // Polymorphism allows you to perform the same operation in multiple ways.
  // This calcAge method is shadowing the one that is in the parent class.
  calcAge() {
    console.log(
      `I'm ${2037 - this.birthYear} years old, but as a student I feel like ${
        2037 - this.birthYear + 10
      }`,
    );
  }
}

// ---------------------------------------
// NO CHILD CONSTRUCTOR FUNCTION.
class StudentCl extends Person {
  method() {
    console.log('method');
  }
}

const noConstructor = new StudentCl(
  'Calling super constructor automatically',
  2002,
);
console.log(noConstructor);
// ---------------------------------------

// Every function has prototype property.

// Classes works the same as function constructors,
// difference is that with classes the prototype chain is set up automatically.

// studentPesho.__proto__ === Student.prototype /property/
// studentPesho.__proto__.__proto__ === Person.prototype /property/
// studentPesho.__proto__.__proto__.__proto__ === Object.prototype /property/

const studentPesho = new Student('Pesho Peshov', 2002, 'JS');

console.log(studentPesho.fullName);
studentPesho.introduce();
studentPesho.calcAge();
