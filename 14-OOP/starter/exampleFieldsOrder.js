'use strict';

// https://www.udemy.com/course/the-complete-javascript-course/learn/lecture/22649111#questions

// https://javascript.info/private-protected-properties-methods
// Protected fields start with _. That’s a well-known convention, not enforced at the language level.
// Programmers should only access a field starting with _ from its class and classes inheriting from it.
// Private fields start with #. JavaScript makes sure we can only access those from inside the class.

class Account {
  // Static - on the class itself. console.dir(Account)

  // Static public properties(fields)
  static className = 'Account';
  // Static protected properties(fields)
  static _protectedClassName = 'Account';
  // Static private properties(fields)
  static #privateClassName = 'Account';

  // NO INPUT DATA NEEDED | if needed create property in constructor fn.

  // public properties(fields) (on instances)
  locale = navigator.language;
  // protected properties(fields) (on instances)
  _movements = [];
  // private properties(fields) (on instances)
  #privateInstanceField = true;
  #pin; // if input is needed for private prop, we always need to define it here

  constructor(owner, currency, pin) {
    // IF INPUT DATA NEEDED. If it is not needed, create property above.

    // public properties
    this.currency = currency;
    // protected properties
    this._owner = owner;
    // private properties
    this.#pin = pin; // defining it above constructor is needed (enclosuring)
  }

  // STATIC METHODS - (Class methods, possible call only on classes)
  // console.dir(Account) (we use them as helper functions) like Array.isArray

  // Static public methods
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

  // Static protected methods
  static _protectedStatic() {
    return 'protected static';
  }

  // Static private methods
  static #privateStaticMethod() {
    return 'private static';
  }

  // Public methods // Public interface/API
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

  // Protected methods
  _transaction(amount) {
    this._movements.push(amount);
  }

  _approveLoan(amount) {
    console.log('Approving loan... ' + amount);
    return true;
  }

  // Private methods
  // private method are NOT on the objects __proto__,
  // it's on the created instance itself.
  #isMovementsEmpty() {
    return this._movements.length === 0;
  }

  // Getters/Setters
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
