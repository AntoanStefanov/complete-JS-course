'use strict';

// https://www.udemy.com/course/the-complete-javascript-course/learn/lecture/22649111#questions

// https://javascript.info/private-protected-properties-methods
// Protected fields start with _. That’s a well-known convention, not enforced at the language level.
// Programmers should only access a field starting with _ from its class and classes inheriting from it.
// Private fields start with #. JavaScript makes sure we can only access those from inside the class.

// Private class fields and methods, are actually part of a bigger proposal,
// for improving JS classes, which is simply called Class fields.

// Properties are usually called 'fields'.

// Public fields
// --- We can think of a public field as a property that will be on all instances.
// Private fields
// Public methods
// Private methods

class Account {
  // STATIC fields(PROPS AND METHODS) ARE SET ON THE ACCOUNT FUNCTION ITSELF.

  // Static class FIELDS(PROPS&METHODS) are defined on the class itself.
  // You cannot call a static method on an object, only on an object class.

  // console.dir(Account).
  static className = 'Account';
  static _protectedClassName = 'Account';
  static #privateClassName = 'Account';

  // CLASS FIELDS (VARIABLES)
  // Set on Instances! Not on the class/not on the prototype(like API methods)!!
  // THE FIELDS/VARIABLES HERE ARE On the EXACTLY same level as the constructor properties.
  // NO AGRUMENTS NEEDED, if input data is needed to be passed,
  // set property in the CONTRUCTOR fn, just like currency, owner needs data.
  // #pin is needed here, just bcs if not defined here, error is thrown in constructor.

  // FIELDS ARE JUST LIKE VARIABLES, JESUS CHRIST. On the same level as the constructor properties.
  //  this scope here, I think, works just as a closure scope.

  // PART OF THE API AND CLASS AND CLASS-CHILDREN ACCESSIBLITY
  // public instance fields(we do not pass any values for them/ex. we pass arg for pin /)
  locale = navigator.language; // public property (not assigning an argument)

  // ONLY CLASS AND CLASS-CHILDREN ACCESSIBLITY
  // protected instance fields(we do not pass any values for them/ex. we pass arg for pin /)
  _movements = []; // protected property (not assigning an argument)

  // ONLY CLASS ACCESSIBILITY!
  // private instance fields(even we pass value in constructor, we need to define it here)
  #pin; // if not defined here, this.#pin = pin -> ERROR
  // defining value here.
  #privateInstanceField = true; // private property (not assigning an argument)

  constructor(owner, currency, pin) {
    this.currency = currency; // public property (assigning an argument)
    this._owner = owner; // protected property (assigning an argument)
    this.#pin = pin; // private property (assigning an argument)
  }

  // PUBLIC STATIC METHODS (there can also be static protected and private methods)
  // console.dir(Account)
  static getPrivateClassName() {
    return this.#privateClassName;
  }

  static getProtectedClassName() {
    return this._protectedClassName;
  }

  static callPrivateAndProtectedStaticMethod() {
    console.log(this.#privateStaticMethod());
    console.log(this._protectedStatic());
  }

  static _protectedStatic() {
    return 'protected static';
  }

  static #privateStaticMethod() {
    return 'private static';
  }

  // Private methods (these are set in the object itself, not in the proto),
  // maybe bcs if in proto, they could be accessed.
  #isMovementsEmpty() {
    return this._movements.length === 0;
  }

  // Protected methods
  _transaction(amount) {
    this._movements.push(amount);
  }

  _approveLoan(amount) {
    console.log('Approving loan... ' + amount);
    return true;
  }

  // Public interface/API
  isMovementsEmpty() {
    // Private fields do not conflict with public ones. We can have both
    // private #isMovementsEmpty and public isMovementsEmpty fields at the same time.
    return this.#isMovementsEmpty();
  }

  getOwner() {
    return this._owner;
  }

  getMovements() {
    return this._movements;
  }

  getPIN() {
    return this.#pin;
  }

  getPrivateInstanceField() {
    return this.#privateInstanceField;
  }

  deposit(amount) {
    this._transaction(amount);
  }

  withdraw(amount) {
    this._transaction(-amount);
  }

  requestLoan(amount) {
    if (this._approveLoan(amount)) {
      this.deposit(amount);
      console.log('Loan approved!');
    }
  }
}

const acc1 = new Account('Antoan', 'EUR', 1111);
console.log(acc1);
console.log(acc1.isMovementsEmpty());
console.log(Account.getPrivateClassName()); // readonly (static private prop)
console.log(Account.getProtectedClassName()); // readonly(static protected prop)
console.log(Account.callPrivateAndProtectedStaticMethod());
// Same readonly is needed for the static PROTECTED prop,
console.log(acc1.getOwner()); // READ-ONLY
console.log(acc1.getMovements()); // READ-ONLY
console.log(acc1.getPIN()); // READ-ONLY
console.log(acc1.getPrivateInstanceField()); // READ-ONLY

acc1.deposit(250);
acc1.withdraw(140);

console.log(acc1);

acc1.requestLoan(1000);

console.log(acc1);

class Test extends Account {
  // Static public/protected properties and methods are inherited.
}

console.log(Test.className);
console.log(Test._protectedClassName);

// console.log(Test.#privateClassName); Error
// Cannot read private member #privateClassName from an object whose class did not declare it
// console.log(Test.getPrivateClassName()); // Error
