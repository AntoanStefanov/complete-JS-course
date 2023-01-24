'use strict';
// https://www.udemy.com/course/the-complete-javascript-course/learn/lecture/22649117#questions

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
    return this._transaction(amount);
  }

  withdraw(amount) {
    return this._transaction(-amount);
  }

  requestLoan(amount) {
    if (this._approveLoan(amount)) {
      console.log('Loan approved!');
      return this.deposit(amount);
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
    return this;
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

// Method chaining with our class.
// All we have to do is to return the object itself.
// This makes most sense in methods that actually SET/MODIFY some property.
// deposit method, adds deposit in the movements prop, so lets return the object
acc1.deposit(200).deposit(300).withdraw(100).requestLoan(1000).withdraw(400);
console.log(acc1);
