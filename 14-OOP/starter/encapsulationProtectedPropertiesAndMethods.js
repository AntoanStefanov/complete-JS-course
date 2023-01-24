'use strict';

// https://www.udemy.com/course/the-complete-javascript-course/learn/lecture/22649109#questions

// https://javascript.info/private-protected-properties-methods
// Protected fields start with _. That’s a well-known convention, not enforced at the language level.
// Programmers should only access a field starting with _ from its class and classes inheriting from it.
// Private fields start with #. JavaScript makes sure we can only access those from inside the class.

// Encapsulation basically means keeping some properties and methods private
// inside the class, so that they are not accessible from outside of the class.

// Then the rest of the methods(properties?) are basically exposed
// as a public interface, which we call API.

// 2 big reasons why we need encapsulation and data privacy.

// 1. Prevent code from outside of the class to accidentally manipulate
// our data inside the class.

// Example: acc1.movements, we are not supposed to MANUALLY mess with this prop,
// therefore we should encapsulate it. /acc1.movements.push(10000) -> BAD/

// 2. When we expose only a small public interface/a small API/ consisting of
// only a few public methods, then we can change all the other internal methods,
// with more confidence. Bcs, we can be sure that the external code does NOT
// rely on these private methods. And therefore, our code will NOT break,
// when we do internal changes.

// That's what encapsulation and data privacy are, and the reasons for it.

// However, JS classes actually do not yet support real data privacy and encapsulation.
// Now, there is a proposal to add truly private class fields and methods,
// but it's not completely ready yet. /next lecture/

// https://javascript.info/private-protected-properties-methods

// Here, we will fake encapsulation by simply using a convention.

// Protected properties are usually prefixed with an underscore _.
// This does not make the property truly protected, it's just a convention.
// Protected fields are naturally inheritable./using it in child classes./

// If we want data to be accessible only from inside the class, we use privates:
// Privates should start with #. They are only accessible from inside the class.

class Account {
  constructor(owner, currency, pin) {
    // We can make everything protected here, but like this, I think we are good
    this.owner = owner;
    this.currency = currency;
    this._pin = pin; // protected property (No sense to be accessible outside)
    this._movements = []; // protected prop (No sense to be accessible outside)
    this.locale = navigator.language;
    // chrome://settings/languages#lan -> locale change for test, if needed.
  }

  // Protected methods (supposed to be used internally)
  _transaction(amount) {
    this._movements.push(amount);
  }

  _approveLoan(amount) {
    console.log('Approving loan... ' + amount);
    return true;
  }

  // Public interface/API (interacting with outside code) |For now: 4 methods
  getMovements() {
    // IT's very common to actually have a method, called get.../set...,
    // INSTEAD OF USING A REAL getter/setter.
    return this._movements;
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

// acc1._movements.push(220);
// We can still access the property, but at least now, everyone on my team,
// will know that this property is NOT supposed to be touched outside of the class.
// You can do it, but I know that this is WRONG! touching protected properties.

// Now, if we still want to give access to this property FROM OUTSIDE OF THE CLASS,
// we need to implement a public method for that.(Or we can use: getter/setter )
// IT's very common to actually have a method, called get.../set...,
// INSTEAD OF USING A REAL getter/setter.

// Correct way of getting the movements:
console.log(acc1.getMovements());
// With this above, everyone at least can read the movements, no modifying tho.
// /unless they use the protected property(_movements) which is WRONG to do!/

acc1.deposit(250);
acc1.withdraw(140);

console.log(acc1);

console.log(acc1.pin);

acc1.requestLoan(1000);

console.log(acc1);
